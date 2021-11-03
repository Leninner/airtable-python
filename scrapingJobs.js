const tecnologia = [
  'aws',
  'java',
  'developer',
  'front-end',
  'web',
  'back-end',
  'frontend',
  'desarrollador',
  'sistemas',
  'frontend',
  'tecnología',
  'backend',
  'programador',
  'qa',
  'software',
  'ios',
  'android',
  'react',
  'angular',
  'vue',
  'node',
  'python',
  'ti',
  'tecnologos',
  'computacion',
  'computación',
  'tecnólogos',
  'tecnico',
  'técnico',
  'tecnologa',
  'tecnóloga',
  'devops',
  'fullstack',
  'developers',
];
const ventas = [
  'ventas',
  'comercial',
  'vendedor',
  'call',
  'compras',
  'comerciales',
  'mercadeo',
  'venta',
  'vendedores',
  'sales',
  'selling',
  'mercaderista',
];
const marketing = [
  'marketing',
  'brand',
  'planner',
  'community',
  'lead',
  'ads',
  'operations',
  'manager',
  'creativa',
  'creativo',
  'redactor',
  'redactora',
  'creative',
  'account',
  'social',
  'diseñadora',
  'comunicación',
  'comunicacion',
  'designer',
  'packaging',
];
const innovacion = ['scrum', 'CTO', 'innovación', 'innovacion', 'product', 'owner', 'associate'];
const logistica = ['logistica', 'logística', 'bodega', 'calidad'];
const finanzas = [
  'auditoría',
  'financiero',
  'credito',
  'crédito',
  'banca',
  'tesorería',
  'tesoreria',
  'contable',
  'contabilidad',
  'contador',
  'contadora',
  'cartera',
  'cajeros',
];
const ejecutivo = [
  'gerente',
  'ejecutivo',
  'ejecutiva',
  'jefe',
  'jefa',
  'lider',
  'líder',
  'coordinador',
  'administrador',
  'director',
  'operativo',
  'subdirector',
];

const pasantias = ['pasante', 'pasantías', 'pasantias', 'pasantía', 'pasantia', 'becario', 'practicante'];

const rrhh = [
  'recruiter',
  'reclutador',
  'humanos',
  'business',
  'partner',
  'humano',
  'secretario',
  'secretaria',
  'selección',
];

const industria = ['Confidencial', 'Comercial', 'Servicios', 'Industrial'];

const citiesAndProvinces = [
  'ambato',
  'samborondón',
  'cuenca',
  'quito',
  'guayaquil',
  'tumbaco',
  'manta',
  'coca',
  'remoto',
  'teletrabajo',
  'machala',
  'daule',
  'santo domingo',
  'quevedo',
  'sangolquí',
  'manabí',
  'latacunga',
  'loja',
  'durán',
  'riobamba',
  'esmeraldas',
  'cayambe',
  'ibarra',
  'rumiñahui',
  'los ríos',
  'paute',
  'tena',
  'pifo',
  'baños',
  'portoviejo',
  'galápagos',
  'santa elena',
  'pifo',
  'el oro',
  'azuay',
  'carchi',
  'pichincha',
  'guayas',
  'tungurahua',
  'orellana',
  'ecuador',
];

// Funciones que servirán para scraping

const getDate = () => {
  return `${new Date().getYear() + 1900}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
};

const getUbicacion = (ubicacion) => {
  let citie = '';

  for (let i = 0; i < citiesAndProvinces.length; i++) {
    if (ubicacion.toLowerCase().includes(citiesAndProvinces[i]) === true) {
      if (citiesAndProvinces[i].split(' ').length > 1) {
        citiesAndProvinces[i].split(' ').forEach((word) => {
          citie += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
        });
      } else {
        citie = citiesAndProvinces[i].charAt(0).toUpperCase() + citiesAndProvinces[i].slice(1);
      }
      break;
    }
  }

  return citie.trimEnd();
};

function isArea(vacante) {
  if (vacante.split(' ').some((word) => tecnologia.includes(word.toLowerCase().trim()) == true)) {
    return 'Tecnología';
  } else if (vacante.split(' ').some((word) => ventas.includes(word.toLowerCase().trim()) == true)) {
    return 'Ventas';
  } else if (vacante.split(' ').some((word) => marketing.includes(word.toLowerCase().trim()) == true)) {
    return 'Marketing';
  } else if (vacante.split(' ').some((word) => innovacion.includes(word.toLowerCase().trim()) == true)) {
    return 'Innovación';
  } else if (vacante.split(' ').some((word) => logistica.includes(word.toLowerCase().trim()) == true)) {
    return 'Logística';
  } else if (vacante.split(' ').some((word) => finanzas.includes(word.toLowerCase().trim()) == true)) {
    return 'Finanzas';
  } else if (vacante.split(' ').some((word) => ejecutivo.includes(word.toLowerCase().trim()) == true)) {
    return 'Dirección';
  } else if (vacante.split(' ').some((word) => rrhh.includes(word.toLowerCase().trim()) == true)) {
    return 'Recursos Humanos';
  }

  return 'Otros';
}

const isNivel = (vacante) => {
  if (vacante.split(' ').some((word) => ejecutivo.includes(word.toLowerCase().trim())) === true) {
    return 'Ejecutivo';
  } else if (vacante.split(' ').some((word) => pasantias.includes(word.toLowerCase().trim())) === true) {
    return 'PASANTE';
  } else {
    return 'Especialista';
  }
};

const getChildElementCount = (value, empleo) => {
  if (empleo.children[0].childElementCount === 3) {
    return value === 'vacante'
      ? empleo.children[0].children[2].children[0].outerText
      : empleo.children[0].children[2].children[1].outerText;
  } else {
    return value === 'vacante'
      ? empleo.children[0].children[1].children[0].outerText
      : empleo.children[0].children[1].children[1].outerText;
  }
};

function linkedInJobs() {
  let empleosOfLinkedIn = [];
  let listaEmpleos = document.querySelectorAll('.jobs-search__results-list li');

  listaEmpleos.forEach((empleo) => {
    let vacante = getChildElementCount('vacante', empleo);
    let empresa = getChildElementCount('empresa', empleo);
    let ubicacion =
      empleo.children[0].childElementCount === 3
        ? empleo.children[0].children[2].children[2].children[0].outerText
        : empleo.children[0].children[1].children[2].children[0].outerText;
    let linkOfJob =
      empleo.children[0].childElementCount === 3 ? empleo.children[0].children[0].href : empleo.children[0].href;

    empleosOfLinkedIn.push({
      'Fecha de Publicación de la Vacante': getDate(),
      Cargo: vacante,
      Area: isArea(vacante),
      Empresa: empresa,
      Industria: industria[Math.floor(Math.random() * industria.length)],
      'Link de la Oferta': linkOfJob,
      Nivel: isNivel(vacante),
      Ubicación: getUbicacion(ubicacion),
    });
  });

  return empleosOfLinkedIn;
}

// NOTE: Funciones para empleos de Jooble
const getChildElementCountJooble = (empleo) => {
  return empleo.children[1].children[1].children[0].childElementCount === 3 ? true : false;
};

const getRemoteElementCount = (empleo) => {
  return empleo.children[1].children[1].childElementCount === 1 ? true : false;
};

function joobleJobs() {
  let empleosOfJooble = [];
  let listaEmpleos = document.querySelectorAll('._2caa5._5d7c4');

  listaEmpleos.forEach((empleo) => {
    let vacante = empleo.children[0].children[0].outerText;
    let empresa = '';
    let ubicacion = '';
    let linkOfJob = empleo.children[0].children[0].children[0].href;

    // Comprobar si es un trabajo remoto o no
    if (getRemoteElementCount(empleo)) {
      empresa = getChildElementCountJooble(empleo)
        ? empleo.children[1].children[1].children[0].children[0].outerText
        : 'Jooble';

      ubicacion = getChildElementCountJooble(empleo)
        ? empleo.children[1].children[1].children[0].children[1].outerText
        : empleo.children[1].children[1].children[0].children[0].outerText;
    } else {
      empresa =
        empleo.children[1].children[1].children[1].childElementCount === 3
          ? empleo.children[1].children[1].children[1].children[0].outerText
          : 'Jooble';
      ubicacion = 'Remoto';
    }

    empleosOfJooble.push({
      'Fecha de Publicación de la Vacante': getDate(),
      Cargo: vacante,
      Area: isArea(vacante),
      Empresa: empresa,
      Industria: industria[Math.floor(Math.random() * industria.length)],
      'Link de la Oferta': linkOfJob,
      Nivel: isNivel(vacante),
      Ubicación: getUbicacion(ubicacion),
    });
  });

  return empleosOfJooble;
}

// Función para empleos de Multitrabajos

const getBusinessOrLocation = (empleo) => {
  if (empleo.children[0].childElementCount === 1) {
    return true;
  } else if (empleo.children[0].childElementCount === 2) {
    return false;
  } else {
    return 3;
  }
};

function multitrabajosFindJobs() {
  let empleosOfMultitrabajos = [];
  const listaEmpleos = document.querySelectorAll('.Card__CardComponentWrapper-sc-i6v2cb-0.kSZvum a');

  listaEmpleos.forEach((empleo) => {
    let vacante = empleo.children[1].children[0].outerText;
    let empresa = '';
    let ubicacion = '';
    let linkOfJob = empleo.href;

    if (getBusinessOrLocation(empleo) === true) {
      empresa = 'Multitrabajos';
      ubicacion = empleo.children[0].children[0].outerText;
    } else if (getBusinessOrLocation(empleo) === false) {
      empresa = empleo.children[0].children[0].outerText;
      ubicacion = empleo.children[0].children[1].outerText;
    } else if (getBusinessOrLocation(empleo) === 3) {
      empresa = empleo.children[0].children[1].outerText;
      ubicacion = empleo.children[0].children[2].outerText;
    }

    empleosOfMultitrabajos.push({
      'Fecha de Publicación de la Vacante': getDate(),
      Cargo: vacante,
      Area: isArea(vacante),
      Empresa: empresa,
      Industria: industria[Math.floor(Math.random() * industria.length)],
      'Link de la Oferta': linkOfJob,
      Nivel: isNivel(vacante),
      Ubicación: getUbicacion(ubicacion),
    });
  });

  return empleosOfMultitrabajos;
}

// TODO: Función para empleos de Computrabajos
function computrabajosFindJobs() {
  let empleosOfComputrabajos = [];
  const listaEmpleos = document.querySelectorAll('.iO');

  listaEmpleos.forEach((empleo) => {
    let vacante = '';
    let empresa = '';
    let ubicacion = '';
    let linkOfJob = '';
    if (empleo.childElementCount > 4) {
      vacante = empleo.children[1].outerText;
      empresa = empleo.children[2].children[0].outerText;
      ubicacion = empleo.children[2].children[1].outerText;
      linkOfJob = empleo.children[1].children[0].href;
    } else {
      vacante = empleo.children[0].outerText;
      empresa = empleo.children[1].children[0].outerText;
      ubicacion = empleo.children[1].children[1].outerText;
      linkOfJob = empleo.children[0].children[0].href;
    }

    empleosOfComputrabajos.push({
      'Fecha de Publicación de la Vacante': getDate(),
      Cargo: vacante,
      Area: isArea(vacante),
      Empresa: empresa,
      Industria: industria[Math.floor(Math.random() * industria.length)],
      'Link de la Oferta': linkOfJob,
      Nivel: isNivel(vacante),
      Ubicación: getUbicacion(ubicacion),
    });
  });

  return empleosOfComputrabajos;
}

const URL = window.location.href;

function findJobs(URL) {
  switch (true) {
    case URL.includes('linkedin'):
      copy(linkedInJobs());
      break;
    case URL.includes('multitrabajos'):
      copy(multitrabajosFindJobs());
      break;
    case URL.includes('jooble'):
      copy(joobleJobs());
      break;
    case URL.includes('computrabajo'):
      copy(computrabajosFindJobs());
      break;
  }
}

findJobs(URL);
