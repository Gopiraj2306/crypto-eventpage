
// import React, { useEffect, useState } from 'react';
// import './App.css'; // Import the new App.css file
// import img1 from './assets/img1.png';
// import img2 from './assets/img2.png';
// import img3 from './assets/img3.png';
// import img4 from './assets/img4.png';
// import img5 from './assets/img5.png';
// import img6 from './assets/img6.png';
// import img7 from './assets/img7.png';




// const App = () => {
//   const [pieceTransforms, setPieceTransforms] = useState({});
//   const [hoveredId, setHoveredId] = useState(null); // <-- new

//   const imagePieces = [
//     { id: 'img1', src: img1, initial: { top: '24%', left: '5%', width: '30%', height: '50%' } },
//     { id: 'img2', src: img2, initial: { top: '19%', left: '35%', width: '21%', height: '34%' } },
//     { id: 'img3', src: img3, initial: { top: '20%', left: '56%', width: '27%', height: '37%' } },
//     { id: 'img4', src: img4, initial: { top: '56.20%', left: '56%', width: '27%', height: '11%' } },
//     { id: 'img5', src: img5, initial: { top: '66.5%', left: '56%', width: '22%', height: '13%' } },
//     { id: 'img6', src: img6, initial: { top: '84%', left: '64%', width: '12%', height: '14%' } },
//     { id: 'img7', src: img7, initial: { top: '51%', left: '35%', width: '21%', height: '26%' } },
//   ];

//   const separationOffsets = {
//     img1: { x: '-50%', y: '-15%' },
//     img2: { x: '20%', y: '-20%' },
//     img3: { x: '-20%', y: '-25%' },
//     img4: { x: '20%', y: '-30%' },
//     img5: { x: '30%', y: '15%' },
//     img6: { x: '-15%', y: '-30%' },
//     img7: { x: '0%', y: '40%' },
//   };

//   useEffect(() => {
//     const initialSeparation = {};
//     imagePieces.forEach(piece => {
//       const offset = separationOffsets[piece.id];
//       if (offset) {
//         initialSeparation[piece.id] = `translate(${offset.x}, ${offset.y})`;
//       }
//     });
//     setPieceTransforms(initialSeparation);

//     const timer = setTimeout(() => {
//       const resetTransforms = {};
//       imagePieces.forEach(piece => {
//         resetTransforms[piece.id] = 'translate(0, 0)';
//       });
//       setPieceTransforms(resetTransforms);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="puzzle-wrapper">
//       <div className="puzzle-container">
//         <div className="puzzle-images">
//           {imagePieces.map((piece) => {
//             const isHovered = hoveredId === piece.id;
//             const offset = separationOffsets[piece.id];
//             const transform = isHovered
//               ? `translate(${offset.x}, ${offset.y})`
//               : pieceTransforms[piece.id] || 'translate(0, 0)';

//             return (
//               <img
//                 key={piece.id}
//                 id={piece.id}
//                 src={piece.src}
//                 alt={`Puzzle Piece ${piece.id}`}
//                 className="puzzle-piece"
//                 style={{
//                   top: piece.initial.top,
//                   left: piece.initial.left,
//                   width: piece.initial.width,
//                   height: piece.initial.height,
//                   transform,
//                 }}
//                 onMouseEnter={() => setHoveredId(piece.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default App;


// import React, { useEffect, useState } from 'react';
// import './App.css'; // Import the new App.css file
// import img1 from './assets/img1.png';
// import img2 from './assets/img2.png';
// import img3 from './assets/img3.png';
// import img4 from './assets/img4.png';
// import img5 from './assets/img5.png';
// import img6 from './assets/img6.png';
// import img7 from './assets/img7.png';


// const App = () => {
//   const [pieceTransforms, setPieceTransforms] = useState({});

//   const imagePieces = [
//     { id: 'img1', src: img1, initial: { top: '24%', left: '5%', width: '30%', height: '50%' } },
//     { id: 'img2', src: img2, initial: { top: '17%', left: '35%', width: '21%', height: '39%' } },
//     { id: 'img3', src: img3, initial: { top: '20%', left: '56%', width: '27%', height: '37%' } },
//     { id: 'img4', src: img4, initial: { top: '56.20%', left: '56%', width: '27%', height: '11%' } },
//     { id: 'img5', src: img5, initial: { top: '66.5%', left: '56%', width: '22%', height: '13%' } },
//     { id: 'img6', src: img6, initial: { top: '84%', left: '64%', width: '12%', height: '14%' } },
//     { id: 'img7', src: img7, initial: { top: '56%', left: '35%', width: '21%', height: '21%' } }, // Tasmania
//   ];

//   const separationOffsets = {
//     img1: { x: '-50%', y: '-15%' },
//     img2: { x: '20%', y: '-20%' },
//     img3: { x: '25%', y: '-25%' },
//     img4: { x: '10%', y: '25%' },
//     img5: { x: '30%', y: '15%' },
//     img6: { x: '-15%', y: '-30%' },
//     img7: { x: '0%', y: '40%' },
//   };

//    useEffect(() => {
//     const initialSeparation = {};
//     imagePieces.forEach(piece => {
//       const offset = separationOffsets[piece.id];
//       if (offset) {
//         initialSeparation[piece.id] = `translate(${offset.x}, ${offset.y})`;
//       }
//     });
//     setPieceTransforms(initialSeparation);

//     const timer = setTimeout(() => {
//       const resetTransforms = {};
//       imagePieces.forEach(piece => {
//         resetTransforms[piece.id] = 'translate(0, 0)';
//       });
//       setPieceTransforms(resetTransforms);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="puzzle-wrapper">
//       <div
//         className="puzzle-container"
//         style={
//           {
//             // You can use a background image for the container itself if needed,
//             // for example, a general map background without specific outline.
//             // backgroundImage: `url('your_general_map_background.png')`,
//             // backgroundSize: 'contain',
//             // backgroundRepeat: 'no-repeat',
//             // backgroundPosition: 'center',
//           }
//         }
//       >
//         <div class="puzzle-images">
//           {/*
//           The map outline image has been removed here.
//           If you want a background map (without it being a separate, z-indexed outline),
//           you can apply it directly to the .puzzle-container via the style prop above.
//         */}

//           {/* Render each image piece */}
//           {imagePieces.map((piece) => (
//           <img
//             key={piece.id}
//             id={piece.id}
//             src={piece.src}
//             alt={`Puzzle Piece ${piece.id}`}
//             className="puzzle-piece"
//             style={{
//               top: piece.initial.top,
//               left: piece.initial.left,
//               width: piece.initial.width,
//               height: piece.initial.height,
//               transform: pieceTransforms[piece.id] || "translate(0, 0)",
//             }}
//             onMouseEnter={() => {
//               setPieceTransforms((prev) => ({
//                 ...prev,
//                 [piece.id]: `translate(${separationOffsets[piece.id].x}, ${separationOffsets[piece.id].y})`,
//               }));
//             }}
//             onMouseLeave={() => {
//               setPieceTransforms((prev) => ({
//                 ...prev,
//                 [piece.id]: 'translate(0, 0)',
//               }));
//             }}
//           />
//         ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from 'react';
import './App.css';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';

const App = () => {
  const [pieceTransforms, setPieceTransforms] = useState({});

  const imagePieces = [
    { id: 'img1', src: img1, initial: { top: '24%', left: '5.3%', width: '190px', height: '287px' } },
    { id: 'img2', src: img2, initial: { top: '20.50%', left: '27%', width: '113px', height: '193.85px' } },
    { id: 'img3', src: img3, initial: { top: '20.3%', left: '39.50%', width: '191px', height: '240px' } },
    { id: 'img4', src: img4, initial: { top: '45.90%', left: '44%', width: '151px', height: '69px' } },
    { id: 'img5', src: img5, initial: { top: '53.25%', left: '44%', width: '131px', height: '70px' } },
    { id: 'img6', src: img6, initial: { top: '64%', left: '49%', width: '69px', height: '70px' } },
    { id: 'img7', src: img7, initial: { top: '41%', left: '27%', width: '150px', height: '172.30px' } },
  ];

  const separationOffsets = {
    img1: { x: '-50%', y: '-15%' },
    img2: { x: '-20%', y: '-20%' },
    img3: { x: '25%', y: '-25%' },
    img4: { x: '40%', y: '-40%' },
    img5: { x: '50%', y: '-15%' },
    img6: { x: '-15%', y: '-30%' },
    img7: { x: '0%', y: '40%' },
  };

  useEffect(() => {
    const initialSeparation = {};
    imagePieces.forEach(piece => {
      const offset = separationOffsets[piece.id];
      initialSeparation[piece.id] = `translate(${offset.x}, ${offset.y})`;
    });
    setPieceTransforms(initialSeparation);

    const timer = setTimeout(() => {
      const resetTransforms = {};
      imagePieces.forEach(piece => {
        resetTransforms[piece.id] = 'translate(0, 0)';
      });
      setPieceTransforms(resetTransforms);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="puzzle-wrapper">
      <div className="puzzle-container">
        <div className="puzzle-images">
          {imagePieces.map(piece => (
            <img
              key={piece.id}
              id={piece.id}
              src={piece.src}
              alt={`Puzzle Piece ${piece.id}`}
              className="puzzle-piece"
              style={{
                top: piece.initial.top,
                left: piece.initial.left,
                width: piece.initial.width,
                height: piece.initial.height,
                transform: pieceTransforms[piece.id] || 'translate(0, 0)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
