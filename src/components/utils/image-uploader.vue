<template>
<div class="image-input__container image-uploader" 
  v-bind:style="containerStyles" 
  v-bind:class="{ 'image-loaded': isImageLoaded }">

    <!-- Hidden input we use to access file contents -->
    <form class="image-input__form" ref="form">
      <input @change="previewThumbnail" class="image-input__input" ref="fileInput" type="file" />
    </form>
    <div v-on:click="triggerInput" class="image-input__overlay"></div>
    <div class="image-input__control-buttons">
      <button v-on:click="toBase64" type="button" class="btn to-base64">64</button>
      <button v-on:click="scaleUp" type="button" class="btn scale-up">+</button>
      <button v-on:click="scaleDown" type="button" class="btn scale-down">-</button>
      <button v-on:click="resetInput" type="button" class="btn reset-input">x</button>
    </div>

    <!-- Used in place of an image tag -->
    <canvas class="image-input__canvas"
      ref="canvas"
      v-bind:height="height"
      v-bind:width="width"
      v-bind:class="{ 'is-draggable': hoverIsDraggable }">
    </canvas>

  </div>
</template>
<script>
module.exports = {
  name: 'image-uploader',
  props: ['id', 'width', 'height'],
  // Must be a function in component definition
  data: function () {
    return {
      isImageLoaded: false,
      hoverIsDraggable: false,
      // Image
      ctx: null,
      canvas: null,
      img: null,
      // Properties
      scaleSteps: 0,
      imageX: 0,
      imageY: 0,
      scaledImageWidth: 0,
      scaledImageHeight: 0,
      imageWidth: 0,
      imageHeight: 0,
      imageRight: 0,
      imageBottom: 0,
      // State
      draggingImage: false,
      // Mouse 
      startX: 0,
      startY: 0,
      mouseX: 0,
      mouseY: 0,
      sharedData: window.sharedData
    }
  },
  computed: {
    containerStyles: function () {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  mounted: function () {
    this.$on('get-image-base64', function () {
      console.log("ON'ING")
      this.updateTemplateImage()
    })
    // Instantiate
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    this.img = document.createElement('img')
  },
  methods: {
    toBase64: function () {
      var imageData = this.canvas.toDataURL('image/png')
      imageData.replace('data:image/pngbase64,', '')
      console.log(imageData)
    },
    draw: function (withBorders) {
      // clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      // some maths
      var scaleFactor = 1 - (this.scaleSteps * 0.1)
      this.scaledImageWidth = this.img.width * scaleFactor
      this.scaledImageHeight = this.scaledImageWidth * (this.img.height / this.img.width)
      // draw the image
      // this.ctx.drawImage(
      // this.img, (top left coords of source to use (x,y)), 
      // width & height of source to use (width, height)
      // (x,y) on canvas
      // width & height on canvas
      this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.imageX, this.imageY, this.scaledImageWidth, this.scaledImageHeight)

      this.imageRight = this.imageX + this.scaledImageWidth
      this.imageBottom = this.imageY + this.scaledImageHeight

      // optionally draw a box around the image (indicates "selected")
      if (withBorders) {
        this.ctx.beginPath()
        this.ctx.moveTo(this.imageX, this.imageY)
        this.ctx.lineTo(this.imageRight, this.imageY)
        this.ctx.lineTo(this.imageRight, this.imageBottom)
        this.ctx.lineTo(this.imageX, this.imageBottom)
        this.ctx.closePath()
        this.ctx.stroke()
      }
    },
    resetInput: function () {
      // clear the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      // Reset state
      this.$refs.form.reset()
      this.isImageLoaded = false
    },
    scaleUp: function () {
      this.scaleSteps--
      this.draw(false)
    },
    scaleDown: function () {
      this.scaleSteps++
      this.draw(false)
    },
    getMousePos: function (evt) {
      var rect = this.canvas.getBoundingClientRect() // abs. size of element
      var scaleX = this.canvas.width / rect.width // relationship bitmap vs. element for X
      var scaleY = this.canvas.height / rect.height // relationship bitmap vs. element for Y

      return {
        x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
        y: (evt.clientY - rect.top) * scaleY // been adjusted to be relative to element
      }
    },
    isImageHit: function (x, y) {
      return (x > this.imageX && x < this.imageX + this.imageWidth && y > this.imageY && y < this.imageY + this.imageHeight)
    },
    triggerInput: function (event) {
      event.preventDefault()
      this.$refs.fileInput.click()
    },
    previewThumbnail: function (event) {
      var vm = this
      var input = event.target
      console.log('loading image')
      if (input.files && input.files[0]) {
        var reader = new FileReader()

        // Set as source
        reader.onload = function (e) {
          vm.img.src = e.target.result
        }

        reader.readAsDataURL(input.files[0])

        vm.img.onload = function () {
          // Draw
          vm.ctx.drawImage(vm.img, 0, 0)
          // Grab position info
          vm.imageWidth = vm.img.width
          vm.imageHeight = vm.img.height
          vm.imageRight = vm.imageX + vm.imageWidth
          vm.imageBottom = vm.imageY + vm.imageHeight
          // Update CTX
          vm.draw(false)
          // Notify component
          vm.isImageLoaded = true
          console.log('image loaded ')
        }
      }

      function handleMouseDown (e) {
        var pos = vm.getMousePos(e)
        vm.startX = pos.x
        vm.startY = pos.y
        vm.draggingImage = vm.hoverIsDraggable
      }

      function handleMouseUp (e) {
        vm.draggingImage = false
        vm.draw(false)
      }

      function handleMouseOut (e) {
        handleMouseUp(e)
      }

      function handleMouseMove (e) {
        // Update cursor property var (
        var pos = vm.getMousePos(e)
        vm.hoverIsDraggable = vm.isImageHit(pos.x, pos.y)

        if (vm.draggingImage) {
          //
          vm.mouseX = pos.x
          vm.mouseY = pos.y

          // move the image by the amount of the latest drag
          var dx = vm.mouseX - vm.startX
          var dy = vm.mouseY - vm.startY
          // Lock image to canvas viewport
          var collidedOnLeft = vm.imageX > 0 && dx > 0
          var collidedOnRight = vm.imageRight < vm.canvas.width && dx < 0
          var collidedOnTop = vm.imageY > 0 && dy > 0
          var collidedOnBottom = vm.imageBottom < vm.canvas.height && dy < 0

          if (collidedOnLeft) {
            vm.imageX = 0
            vm.imageRight = vm.scaledImageWidth
          } else if (collidedOnRight) {
            vm.imageX = vm.canvas.width - vm.scaledImageWidth
            vm.imageRight = vm.canvas.width
          } else {
            vm.imageX += dx
            vm.imageRight += dx
          }
          if (collidedOnTop) {
            vm.imageY = 0
            vm.imageBottom = vm.scaledImageHeight
          } else if (collidedOnBottom) {
            vm.imageY = vm.canvas.height - vm.scaledImageHeight
            vm.imageBottom = vm.canvas.height
          } else {
            vm.imageY += dy
            vm.imageBottom += dy
          }
          // Reset the startXY for next time
          vm.startX = vm.mouseX
          vm.startY = vm.mouseY

          // Redraw the image with border
          vm.draw(true)
        }
      } // END MOUSEMOVE

      // LISTEN (:
      vm.canvas.addEventListener('mousedown', handleMouseDown, false)
      vm.canvas.addEventListener('mousemove', handleMouseMove, false)
      vm.canvas.addEventListener('mouseup', handleMouseUp, false)
      vm.canvas.addEventListener('mouseout', handleMouseOut, false)
    }
  }
}

</script>
<style lang="scss">

.image-input__input 
{ 
  position: absolute;
  top: -10px; left: -10px;

  width: 9px;
  height: 9px;

  cursor: pointer;
}

.image-input__container {
  position: absolute;
  overflow: hidden;

  border: 1px solid #d8dce5;
  border-radius: 4px;
  box-sizing: border-box; 
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/424395/camera.svg");
  background-size: 50px 41px;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    border: 1px solid #d8dce5;
    transition: 0.15s border;
    background-size: 55px 44px;

  }
}

.image-input__overlay 
{
  position: absolute;
  top: 0; left: 0;

  width: 100%;
  height: 100%;

  cursor: pointer;

  .image-loaded & {
    display: none;
  }
}

.image-input__control-buttons 
{
  display: none;

  .image-loaded & { display: block; }

  position: absolute;
  top: 5px; left: 5px;

  button {
    margin: 0; padding: 0;
    width: 25px; height: 25px;
  }
}

.image-input__canvas {
  &.is-draggable {
    cursor: move;
  }
}


</style>