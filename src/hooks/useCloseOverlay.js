// import React, { useEffect } from 'react'

// export default function useCloseOverlay() {

//     const modalEl = useRef(); // 
//     const [isOpen, setOpen] = useState(false);

//     const handleClickOutside = ({ target }) => {
//         if (isOpen && !modalEl.current.contains(target)) setOpen(false);
//         };


//     useEffect(() => {
//         window.addEventListener("click", handleClickOutside);
//         return () => {
//             window.removeEventListener("click", handleClickOutside);
//         };
//         }, []);

//     return (
//         {
//             // isOpen && 
//             <Modal ref={modalEl}>
//             </Modal>
//         }
//     );
// }
