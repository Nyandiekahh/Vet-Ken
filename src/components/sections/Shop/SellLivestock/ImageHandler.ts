// src/components/sections/Shop/SellLivestock/ImageHandler.ts
export const processImages = async (files: FileList): Promise<string[]> => {
    const maxWidth = 1200;
    const maxHeight = 1200;
    const quality = 0.8;
    
    const processImage = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
            
            if (width > maxWidth) {
              height = (height * maxWidth) / width;
              width = maxWidth;
            }
            
            if (height > maxHeight) {
              width = (width * maxHeight) / height;
              height = maxHeight;
            }
            
            canvas.width = width;
            canvas.height = height;
            
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(img, 0, 0, width, height);
            
            resolve(canvas.toDataURL('image/jpeg', quality));
          };
          img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      });
    };
    
    const promises = Array.from(files).map(processImage);
    return Promise.all(promises);
  };