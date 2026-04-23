// "use client";

// import { useEffect } from 'react';

// export default function HeroEffects() {
//   useEffect(() => {
//     // Load SheryJS CDN after mount
//     const sheryScript = document.createElement('script');
//     sheryScript.src = 'https://cdn.skypack.dev/sheryjs@1.0.0-beta.0.1.8';
//     sheryScript.async = true;
//     document.head.appendChild(sheryScript);

//     sheryScript.onload = () => {
//       setTimeout(() => {
//         console.log('Checking Shery...');
//         const shery = (window as any).Shery;
//         if (shery) {
//           const hvrElements = document.querySelectorAll('.hvr');
//           const imageElements = document.querySelectorAll('.image');
//           console.log('Found .hvr elements:', hvrElements.length);
//           console.log('Found .image elements:', imageElements.length);
//           console.log('Initializing Shery effects...');
          
//           shery.makeMagnet('.image');
//           shery.hoverTrace('.image');
//           shery.hoverTrace('.hvr');
//           shery.hoverWithMediaCircle('.hvr', {
//             videos: [
//               'https://cuberto.com/assets/showreel/short.mp4',
//               'https://cuberto.com/assets/home/summary/2.mp4'
//             ]
//           });
//           console.log('SheryJS effects applied successfully!');
//         } else {
//           console.error('Shery not loaded!');
//         }
//       }, 1000);
//     };

//     return () => {
//       if (sheryScript.parentNode) sheryScript.parentNode.removeChild(sheryScript);
//     };
//   }, []);

//   return (
//     <style jsx global>{`
//       .image, .hvr {
//         cursor: pointer;
//       }
//     `}</style>
//   );
// }


