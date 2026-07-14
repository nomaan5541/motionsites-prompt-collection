Build a single-file HTML community CTA card section with the following exact specifications.
Fonts & Setup

Import DM Sans from Google Fonts with weights 400, 500, 600, 700, 800 (opsz 9..40)
Use a universal *, *::before, *::after reset: box-sizing: border-box, zero margin/padding
Body: DM Sans font family, background #f0f2f7, text color #1e2240, flex column centered, min-height: 100vh, padding 24px 16px

Layout Structure
<section class="cta-section">
  <div class="cta-wrapper">
    <video class="cta-bg" autoplay muted loop playsinline>
      <source src="[VIDEO_URL]" type="video/mp4" />
    </video>
    <div class="cta-content">
      <h2>Subscribe to Our Community</h2>
      <p>Get exclusive access to cutting-edge tech insights, industry trends, and expert advice delivered straight to your inbox. Join our growing community today!</p>
      <div class="cta-form">
        <input type="email" placeholder="Enter your email here" />
        <button type="button">Join Now</button>
      </div>
      <div class="cta-members">
        <div class="cta-avatars">
          <span class="av1"></span>
          <span class="av2"></span>
          <span class="av3"></span>
          <span class="av4"></span>
        </div>
        <p>5,000+ happy members</p>
      </div>
    </div>
  </div>
</section>
Asset URLs
Background video (set on <video class="cta-bg"> source, MP4 type):
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_101827_abebfeec-f243-466b-b494-7f6814c0fbbf.mp4
Avatar images (CleanShot CDN, JPEG, used as background-image on .av1–.av4 respectively):
av1: https://media.cleanshot.cloud/media/21620/CG4uIqBDEVKcxvtOnH2si7r1u5ne9QKdmAAj5Ym5.jpeg?Expires=1777825539&Signature=OF0EIwcA6IsXNVbGzc9-3KdoOBpMbtOrzarsjwKbOCM7bpPmnKhA18dnDGmy2sF0g7y2mcwmptgBLWmHJHESlMuQxzUqjuc2kqF75vztQIMdR1DYroQ53P~DB8tGIjNyp4-Wgc5bigDyODIrQMeJfzTlhaPjHIkoZNWZsKtJahOHMh6znpuNRcx-oOUvi1JsHe7ObRI27rz-~qDod8w3XsyzLvsSxdf6dlNdJ9Xo650r1tHtwMyh8QXBu037lYRKYD1qSB9-sA6J0a~Xq7ZxhVKady-BbhWk6sEY0XZO4UqAp1IWuPQESPWyAXJ3PmD5gep0mc7igPVcw5EqqvSBaA__&Key-Pair-Id=K269JMAT9ZF4GZ

av2: https://media.cleanshot.cloud/media/21620/dsPsOuiJtbftO4aFjajygweQMGFKZOJk4ac3ujD1.jpeg?Expires=1777825533&Signature=s~QBv9pAVu7NEuyEuJP3u875TwxED6c1MCZFGrhEyU8Puj7Yt2I3V0DxTNUy0eOSu26RSV5yzrkfl~O7d5zk32X7SqsNesIxA6urpBUrSaU79LxwsQf0TLAeq3-1nSHUSC96Q0OnHAZLpBZ0qbZcKQ8CQCiC9vjcBm~RkDy1mCLlK8SfVsqRMch0yVfYAZcNovalP9jBQ2kesLFu68h~eSbrUzWHhni7t4WQI3V3qNVEZCgzProoMdG~zwq1gBew1KFOrz2MS765pqym0hlIIwPiKQv6BeIYYHpdYXdWpl-ycjhsbW8GqcJkAeDkCmuy~raeqHmVzaNwzDvFZrb2yw__&Key-Pair-Id=K269JMAT9ZF4GZ

av3: https://media.cleanshot.cloud/media/21620/tvzgP1YqhKu4Rj3N1FmqAmZVgNs6jl9gzgmpmUHk.jpeg?Expires=1777825526&Signature=m6W6cOzHlaMAfw4gXnU9Vpvxsko-nOaqqsPwsUNgPbeSjLuKTUaeIsTnbqcA0PZjtr-EX0iI9y4OhuF6p2sFG93diwprvjGKOhlErVlnx-gCoQGk73PKcrlKjelXp4QOg56rbRL79VAVEVvZ8klyh--cH9uZNlo4Z53qP272dSXYQfj3YGWTevKEnwr3p5~sjUWW4-BBSJ7l-~Z5SA~n7W8G-FKm~LVNUqdz633IwnCbwaF7CJtvhlycOjnsJXZdYl0ZesQTRn~yYrblzLL5sAnWEU0NDPeuPwnIdE7z3SDL7xm1SBXetkF~P9or-XFMEsVePC~idOeAYwG2zSxoew__&Key-Pair-Id=K269JMAT9ZF4GZ

av4: https://media.cleanshot.cloud/media/21620/xuWsFI56rqEUeYTmLVTHCoq224TH90PxcBKrsp4N.jpeg?Expires=1777825521&Signature=lLNMvpDUre8-UAsh1mRdGGLOnBaEGY4hcmQjpbCMkwTHK48cfU5OW5RVkmlcJffulFiUhEfB7qkPSFmIJ7vUcg9nU5qa8iHb6~RGpCHSqTbqK6c2LWy3unWA4e~UY3E9Q4tEQ7eewEbIlZscERJK7XtsoPgb9mde5TlLzjp90bTXbJwwSU5dXo6dhrvml5PMmJa8BDUcVIV2a8BCzkw8OzDBQUwWMhammdmGLBMNpRTJbnaNYM4pXgrcABcJ0DMBLkUjCUTtftKNmYM4O32SlRWbZvXY73H2qRUfL0wBwxM0c35gf372hh1tdkoEoixnneCW5TBs79wyS7xV3dF61Q__&Key-Pair-Id=K269JMAT9ZF4GZ
CSS Specifications
.cta-section: width 100%, padding 0 32px 48px
.cta-wrapper: position relative, border-radius 28px, overflow hidden, border 1px solid rgba(13, 36, 72, 0.15), NO box-shadow, background #d8e5f2, min-height 220px, max-width 1150px, margin 0 auto
.cta-bg (the video element): position absolute, inset: 0, width/height 100%, object-fit: cover, z-index 0, opacity 1 (no overlay)
.cta-content: position relative, z-index 1, padding 40px, max-width 560px
.cta-content h2: DM Sans, font-size 26px, weight 700, color #08063C, margin-bottom 12px, line-height 1.2, letter-spacing -0.015em. Text: "Subscribe to Our Community"
.cta-content p: font-size 13.5px, weight 400, color #08063C, line-height 1.65, margin-bottom 28px, max-width 400px
.cta-form: flex with gap 10px, align-items center, flex-wrap wrap, max-width 80%
.cta-form input: flex 1, min-width 200px, padding 13px 22px, border-radius 50px, border 1px solid rgba(195, 210, 235, 0.75), background rgba(255, 255, 255, 0.96), DM Sans 13px, color #08063C, outline none, box-shadow 0 1px 5px rgba(100, 110, 180, 0.07), transitions on box-shadow and border-color (0.2s)

Placeholder: color #b2bbd4, weight 400
Focus: border-color rgba(130, 155, 220, 0.65), box-shadow 0 1px 10px rgba(100, 120, 210, 0.16)

.cta-form button: padding 13px 24px, border-radius 50px, no border, background #f8f9fc, color #08063C, DM Sans 13px weight 600, cursor pointer, white-space nowrap, letter-spacing 0.01em, box-shadow 0 2px 10px rgba(100, 110, 180, 0.15), transitions on background, transform (0.15s), and box-shadow (0.2s)

Hover: background #eef0f5, transform: translateY(-1px), box-shadow 0 4px 16px rgba(100, 110, 180, 0.25)
Active: transform: translateY(0)
Text: "Join Now"

.cta-members: flex, align-items center, gap 10px, margin-top 20px
.cta-avatars: flex container
.cta-avatars span: inline-block, 32×32px, border-radius 50%, no border, margin-left -9px (overlap), overflow hidden, background-size cover, background-position center top, box-shadow 0 1px 4px rgba(0, 0, 0, 0.12), flex-shrink 0

First child: margin-left 0
Apply each avatar URL as background-image to .av1, .av2, .av3, .av4

.cta-members p: font-size 12.5px, weight 600, color #08063C, no margin. Text: "5,000+ happy members"
Mobile breakpoint (max-width: 600px)

.cta-content: padding 24px, max-width 100%
h2: font-size 19px
p: font-size 11.5px, max-width 100%, margin-bottom 16px
.cta-form: flex-direction column, gap 8px, max-width 100%
Form input and button: width 100%, text-align center
.cta-members: flex-wrap wrap, gap 8px
Avatars: 28×28px, margin-left -7px

Animations / Transitions

Input: smooth 0.2s transition on border-color and box-shadow when focused
Button: 0.2s background, 0.15s transform, 0.2s box-shadow — lifts 1px on hover, returns on active
Background video: autoplay, muted, loop, playsinline (no JS animations)

No additional overlays, gradients, or drop shadows on the card itself. The video plays at full opacity directly behind the content.