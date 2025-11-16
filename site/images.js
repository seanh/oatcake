/*
An image or video's height will upset the vertical rhythm unless it's an
even multiple of Oatcake's line height of 24px.

Correcting this isn't as simple as resizing the image or video file: on
smaller displays browsers will shrink an image or video's width **and
height** to fit it into the available screen width while maintaining
its aspect ratio, so the element's height will no longer be a multiple
of 24px.

If you force the element's width and height with CSS then it'll overflow
the screen width on smaller screens (since the browser can no longer
shrink the element) and cause a horizontal scrollbar.

If you force just the height and allow the width to change then the
browser will horizontally squash the video (changing its aspect ratio) on
smaller screens.

This bit of JavaScript keeps the heights of images and videos snapped
to the vertical rhythm while maintaining their original aspect ratio,
regardless of the original file size and even as the browser resizes the
window.

If you don't want an _iframe_ to upset the vertical rhythm you can just
use HTML or CSS to make its height a multiple of 24px. You can do this
with an HTML attribute like `height="168"` or with some inline CSS:
`style="height:168px;"`. Unlike with images and videos, browsers don't
shrink the heights of iframes to maintain the element's aspect ratio
when shrinking their widths to fit them onto a smaller screen, so the
JavaScript vertical rhythm fix isn't needed for iframes.
*/
function adjustMediaSizes() {
  let images = Array.prototype.slice.call(
    document.getElementsByTagName("img"),
    0,
  );
  let videos = Array.prototype.slice.call(
    document.getElementsByTagName("video"),
    0,
  );
  let media = images.concat(videos);

  let lineHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--ok-line-height",
    ),
  );

  for (let element of media) {
    if (element.classList.contains("noresize")) {
      continue;
    }

    element.style.height = "auto";
    element.style.width = "auto";

    let originalHeight = element.offsetHeight;
    let ratio = element.naturalWidth / element.naturalHeight;
    let newHeight = lineHeight * Math.floor(originalHeight / lineHeight);
    let newWidth = newHeight * ratio;

    element.style.height = newHeight + "px";
    element.style.width = newWidth + "px";
  }
}

window.addEventListener("load", adjustMediaSizes);
window.addEventListener("resize", adjustMediaSizes);
