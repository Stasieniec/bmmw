# Content Management Guide

This guide explains how to add and update content on your BMMW Films website.

## Adding Images

### Logo
1. Place your logo file in `/public/images/`
2. Recommended filename: `logo.png` or `logo.svg`
3. Update the Navigation component to use the logo:
   ```tsx
   // In components/Navigation.tsx
   <Link href="/" className="flex items-center">
     <Image src="/images/logo.png" alt="BMMW" width={120} height={40} />
   </Link>
   ```

### Project Images
1. Add project images to `/public/images/projects/`
2. Use descriptive filenames: `project-name.jpg`
3. Recommended dimensions: 1920x1080px (16:9 aspect ratio)
4. Optimize images before uploading (use tools like TinyPNG)

## Updating Portfolio Projects

Edit `/app/page.tsx`:

```tsx
const projects = [
  {
    id: 1,
    title: 'Nazwa Projektu',
    category: 'Dokument', // or 'Film fabularny'
    description: 'Opis projektu w 1-2 zdaniach',
    image: '/images/projects/project-name.jpg', // Add this
  },
  // Add more projects...
];
```

Then update the portfolio grid to use the images:

```tsx
<div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>
```

## Updating Contact Information

Edit `/app/kontakt/page.tsx`:

1. **Email**: Update the href in the email link:
   ```tsx
   <a href="mailto:your-email@bmmw.pl">your-email@bmmw.pl</a>
   ```

2. **Phone**: Update the phone number:
   ```tsx
   <a href="tel:+48XXXXXXXXX">+48 XXX XXX XXX</a>
   ```

3. **Address**: Update the location text

## Updating About Page

Edit `/app/o-nas/page.tsx` to update:
- Company description
- Mission statement
- Team information
- Any other details about BMMW

## Adding New Pages

To add a new page:

1. Create a new directory in `/app/`:
   ```bash
   mkdir app/new-page
   ```

2. Create `page.tsx`:
   ```tsx
   export default function NewPage() {
     return (
       <div className="min-h-screen">
         <h1>New Page Title</h1>
       </div>
     );
   }
   ```

3. Add to navigation in `/components/Navigation.tsx`:
   ```tsx
   const links = [
     { href: '/', label: 'Portfolio' },
     { href: '/o-nas', label: 'O nas' },
     { href: '/kontakt', label: 'Kontakt' },
     { href: '/new-page', label: 'New Page' }, // Add this
   ];
   ```

## Style Guidelines

### Colors
- Primary: Black (`#000000`)
- Background: White (`#FFFFFF`)
- Text: Gray shades (`text-gray-600`, `text-gray-700`)
- Hover states: `hover:text-black`, `hover:bg-gray-800`

### Typography
- Headlines: Bold, tracking-tight
- Body: Regular weight, leading-relaxed
- Font: Inter (already configured)

### Spacing
- Sections: `py-20` (80px vertical padding)
- Content max-width: `max-w-7xl` or `max-w-4xl`
- Consistent padding: `px-6` on mobile

## SEO Updates

Update metadata in each page:

```tsx
export const metadata: Metadata = {
  title: 'Your Page Title - BMMW Films',
  description: 'Your page description for search engines',
};
```

## Testing Changes Locally

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## Deploying Changes

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update content"
   ```

2. Push to repository:
   ```bash
   git push origin main
   ```

3. Cloudflare Pages will automatically deploy your changes

## Best Practices

1. **Images**: Always optimize before uploading
2. **Alt Text**: Always include descriptive alt text for images
3. **Testing**: Test changes locally before deploying
4. **Backup**: Keep original high-res images in a separate location
5. **Polish Language**: Ensure all content is in Polish with proper diacritics

## Need Help?

If you need to make more complex changes:
- Refer to [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)

