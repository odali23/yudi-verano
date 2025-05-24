// cupo.js

// Crear el contenedor de la ventana flotante
const popup = document.createElement('div');
popup.style.position = 'fixed';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.background = '#fff';
popup.style.padding = '30px 40px';
popup.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
popup.style.borderRadius = '10px';
popup.style.zIndex = '9999';
popup.style.fontSize = '1.3rem';
popup.style.fontFamily = 'sans-serif';
popup.style.textAlign = 'center';

// Mensaje de cupos agotados
popup.textContent = '¡Los cupos están agotados!';

// Botón para cerrar la ventana
const closeBtn = document.createElement('button');
closeBtn.textContent = 'Cerrar';
closeBtn.style.marginTop = '20px';
closeBtn.style.padding = '8px 18px';
closeBtn.style.background = '#0078d4';
closeBtn.style.color = '#fff';
closeBtn.style.border = 'none';
closeBtn.style.borderRadius = '5px';
closeBtn.style.cursor = 'pointer';

closeBtn.onclick = () => {
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
};

popup.appendChild(document.createElement('br'));
popup.appendChild(closeBtn);

// Fondo semitransparente detrás de la ventana
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.background = 'rgba(0,0,0,0.3)';
overlay.style.zIndex = '9998';

// Agregar al DOM
document.body.appendChild(overlay);
document.body.appendChild(popup);