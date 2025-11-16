# Video Hosting Solutions for BMMW Films

Your intro video (`openening_12_seconds.mp4`) is **25.8 MB**, which exceeds Cloudflare Pages' **25 MB limit**. 

I've moved it to: `openening_12_seconds.mp4.backup` (in project root)

## ✅ Solution 1: Host on Cloudflare R2 (Recommended)

**Why:** Free tier, fast, integrates perfectly with Cloudflare Pages.

### Steps:

1. **Go to Cloudflare Dashboard → R2 → Create Bucket**
   - Bucket name: `bmmw-videos`
   - Location: Choose closest to your audience

2. **Upload your video:**
   - Click "Upload" 
   - Select `openening_12_seconds.mp4.backup`
   - Make it public: Settings → Public Access → Allow

3. **Get the public URL:**
   - It will look like: `https://pub-xxxxx.r2.dev/openening_12_seconds.mp4`

4. **Update VideoIntro.tsx:**
   - Replace `https://YOUR-CDN-URL.com/openening_12_seconds.mp4`
   - With your R2 URL

5. **Optional - Custom Domain:**
   - Add domain in R2 bucket settings
   - Use: `https://videos.bmmwfilms.com/openening_12_seconds.mp4`

**Cost:** FREE (10 GB storage, 10 million Class A operations/month)

---

## ✅ Solution 2: Compress the Video

Keep it local by reducing file size to under 25 MB.

### Option A: Use Online Tool (Easy)
1. Go to https://www.freeconvert.com/video-compressor
2. Upload `openening_12_seconds.mp4.backup`
3. Target size: **23 MB** (safe margin)
4. Download compressed video
5. Replace in `/public/` folder
6. Revert VideoIntro.tsx to use `/openening_12_seconds.mp4`

### Option B: Use FFmpeg (Better Quality)
```bash
# Install ffmpeg (if not installed)
# Ubuntu/Debian: sudo apt install ffmpeg
# Mac: brew install ffmpeg

# Compress video to ~22 MB with good quality
ffmpeg -i openening_12_seconds.mp4.backup \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -c:a aac \
  -b:a 128k \
  public/openening_12_seconds.mp4
```

---

## ✅ Solution 3: Bunny CDN (Cheap & Fast)

**Cost:** ~$0.01/GB + $1/month storage

1. Sign up at https://bunny.net
2. Create Storage Zone: `bmmw-videos`
3. Upload video via dashboard
4. Enable Pull Zone (CDN)
5. Get URL: `https://bmmw-videos.b-cdn.net/openening_12_seconds.mp4`
6. Update VideoIntro.tsx with this URL

**Pros:** Extremely fast, very cheap, reliable

---

## ✅ Solution 4: YouTube (Unlisted)

**FREE** but less brand control.

1. Upload to YouTube as **Unlisted**
2. Use YouTube embed code
3. Need to modify VideoIntro component significantly

**Not recommended** - Less control over playback, branding, and UX.

---

## 🚀 Quick Deploy Fix (Temporary)

To deploy RIGHT NOW without the video:

1. The video is already moved to `.backup`
2. Component shows a TODO comment
3. Deploy to Cloudflare Pages ✅
4. Add video hosting later
5. Push update with proper URL

---

## 📝 After Hosting Video

Once you've uploaded to R2/CDN:

1. **Get the public URL**
2. **Edit:** `components/VideoIntro.tsx`
3. **Replace line 148:**
   ```tsx
   <source src="https://YOUR-ACTUAL-CDN-URL/openening_12_seconds.mp4" type="video/mp4" />
   ```
4. **Commit and push:**
   ```bash
   git add components/VideoIntro.tsx
   git commit -m "Update video URL to CDN"
   git push
   ```
5. **Cloudflare Pages auto-deploys** ✅

---

## 🎯 My Recommendation

**Use Cloudflare R2** because:
- ✅ Free tier is generous
- ✅ Integrates with your existing Cloudflare setup
- ✅ Fast CDN included
- ✅ No additional vendor
- ✅ Easy to manage

Takes about 5 minutes to set up!

