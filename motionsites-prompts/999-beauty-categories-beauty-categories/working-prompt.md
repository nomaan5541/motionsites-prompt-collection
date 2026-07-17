# Working Prompt: Beauty Categories

This is the original full prompt returned by the MotionSites `get-prompt` endpoint in the current session.

## Metadata

- Prompt ID: `beauty-categories`
- Category: Categories
- Page type: hero
- Source status: fetched
- Preview video: https://stream.mux.com/XnnWeikW01VKsllWkcYdPin01006apDKp6vPJIYSIVBaVA.m3u8
- Preview image: 

## Prompt

```
---

**Prompt to recreate the "Categories" section:**

> Build a "Categories" section in React + Tailwind CSS with the following exact specifications:
>
> **Section Container:**
> - Full-width `<section>` with `bg-white`, `text-white`, `min-h-screen`.
> - Flexbox column layout with `justify-center` to vertically center the grid content.
> - No horizontal or vertical padding on the section itself.
>
> **Grid Layout:**
> - A CSS grid: `grid-cols-1` on mobile, `md:grid-cols-3` on medium+.
> - The entire grid uses an IntersectionObserver-based reveal animation (threshold `0.1`): transitions from `opacity-0 translate-y-12` to `opacity-100 translate-y-0` over `duration-1000 ease-out`.
>
> **3 Category Cards with exact data:**
> 1. Name: `"face"` | Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203023_87a26602-2898-4acc-a396-c7a2b5ad84fd.mp4`
> 2. Name: `"beauty tools"` | Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203415_b86e3f19-2aec-46cd-9a86-b64c40118e38.mp4`
> 3. Name: `"body"` | Video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_203051_85fee398-ea01-4aa0-972b-137a74213be5.mp4`
>
> **Card Layout (each card):**
> - `position: relative`, flexbox column with `justify-between`, `items-start`.
> - Padding: `p-6` mobile, `sm:p-8`, `md:p-12`.
> - Heights: `min-h-[400px]` mobile, `sm:min-h-[500px]`, `md:min-h-[750px]`.
> - `overflow-hidden`.
> - Each card has a staggered `transitionDelay` of `index * 150ms`.
> - Uses `group` for hover interactions.
>
> **Background Video:**
> - `<video>` element with attributes: `autoPlay`, `loop`, `muted`, `playsInline`.
> - Positioned absolutely: `absolute inset-0 w-full h-full object-cover`.
> - Hover effect: `scale-105` over `duration-700` via `transition-transform group-hover:scale-105`.
> - The `src` attribute is set directly from the video URL (no `<source>` tag).
>
> **Dark Overlay:**
> - A `<div>` absolutely positioned over the video: `absolute inset-0`.
> - Default: `bg-black/10`. On hover: `group-hover:bg-black/20`.
> - `transition-colors duration-500`.
>
> **Category Name (vertical text):**
> - `<h2>` tag, positioned above overlay: `relative z-10`.
> - Font sizes: `text-5xl` mobile, `sm:text-6xl`, `md:text-7xl`, `lg:text-8xl`. Weight: `font-medium`.
> - **Vertical text**: achieved with inline style `writingMode: 'vertical-lr'` combined with `transform: 'rotate(180deg)'` (this makes text read bottom-to-top).
> - Hover: `group-hover:-translate-y-2` over `duration-500`.
> - Text is lowercase (rendered as-is from the data: "face", "beauty tools", "body").
>
> **Shop Button:**
> - `<button>` with class `btn-primary` (see CSS below) plus `relative z-10 mt-auto px-8 py-3 bg-white text-black rounded-full text-sm`.
> - Text: `"shop {category name}"` in lowercase (e.g., "shop face", "shop beauty tools", "shop body").
> - `mt-auto` pushes the button to the bottom of the card.
>
> **Required CSS for `btn-primary` (in global stylesheet):**
> ```css
> .btn-primary {
>   position: relative;
>   overflow: hidden;
>   transition: transform 0.3s ease, box-shadow 0.3s ease;
> }
> .btn-primary::before {
>   content: '';
>   position: absolute;
>   inset: 0;
>   background: linear-gradient(120deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%);
>   transform: translateX(-100%);
>   transition: transform 0.5s ease;
> }
> .btn-primary:hover {
>   transform: translateY(-2px);
>   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
> }
> .btn-primary:hover::before {
>   transform: translateX(100%);
> }
> .btn-primary:active {
>   transform: translateY(0);
>   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
> }
> ```
>
> **IntersectionObserver hook (`useInView`):**
> - Accepts a `threshold` parameter (default `0.15`), uses a ref.
> - Observes the element; once `isIntersecting` is true, sets `isVisible = true` and unobserves (one-shot animation).
> - Returns `{ ref, isVisible }`.
> - This section calls it with threshold `0.1`.

---
```
