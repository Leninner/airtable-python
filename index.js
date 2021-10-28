const tecnologia = [
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

const rrhh = ['recruiter', 'reclutador', 'humanos', 'business', 'partner', 'humano', 'secretario', 'secretaria'];

const industria = ['Confidencial', 'Comercial', 'Servicios', 'Industrial'];

const citiesAndProvinces = [
  'ambato',
  'samborondón',
  'cuenca',
  'quito',
  'quayaquil',
  'tumbaco',
  'manta',
  'remoto',
  'teletrabajo',
  'machala',
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
  'baños',
  'portoviejo',
  'galápagos',
  'pifo',
  'el oro',
  'azuay',
  'carchi',
  'pichincha',
  'ecuador',
  'tungurahua',
];

const isUbicacion = (ubicacion) => {
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

const getDate = () => {
  return `${new Date().getYear() + 1900}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
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
      Ubicación: isUbicacion(ubicacion),
    });
  });

  return empleosOfLinkedIn;
}

copy(linkedInJobs());
