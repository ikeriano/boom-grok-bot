// Temáticas (misma organización que el APK de referencia): paleta del plató + decoración 3D + preguntas temáticas.
// 'clasico' usa el color de plató elegido en Opciones (azul / naranja / dorado).
import { TEMAS } from './plato/boom.js';

const pal = (rombo, gap, franjas, borde, aro, marco, luces, fondo) => ({ rombo, gap, franjas, borde, aro, marco, luces, fondo });
export const THEMES = {
  clasico: { name: 'Normal', emoji: '⭐', paleta: null, deco: null, hashtag: '#Boom' },
  prime: { name: 'Especial Prime Time', emoji: '🌟', deco: 'campeones', banner: 'ESPECIAL PRIME TIME', paleta: 'dorado', hashtag: '#BoomPrimeTime', festivo: true,
    saludo: '¡Bienvenidos a esta gala especial de ¡Boom! en prime time! Esta noche todos los premios valen el doble.', extra: ['Y el bote… ¡también es doble! Así que mucho cuidado con los cables.'] },
  halloween: { name: 'Halloween', emoji: '🎃', deco: 'halloween', banner: 'ESPECIAL HALLOWEEN', hashtag: '#BoomHalloween', paleta: pal(['#2a0a3d', '#7a2aa0', '#ff9a40'], '#060208', 0xff7a00, 0xff7a00, 0xff4500, 0xff7a00, [0xff6a00, 0x9b30ff], 0x050208),
    saludo: '¡Muajaja! Bienvenidos al especial de Halloween de ¡Boom! Esta noche las bombas dan más miedo que nunca.' },
  ninos: { name: 'Niños', emoji: '🧸', deco: 'ninos', banner: 'ESPECIAL NIÑOS', hashtag: '#BoomNiños', festivo: true, paleta: pal(['#0062a0', '#00a6d6', '#ffe0f0'], '#020a14', 0xffd60a, 0xff5ca8, 0xff5ca8, 0xffd60a, [0xff5ca8, 0xffd60a], 0x020a14),
    saludo: '¡Hola, chicos y chicas! Bienvenidos al especial de niños de ¡Boom!, con las preguntas más divertidas.' },
  nochebuena: { name: 'Nochebuena', emoji: '🕯️', deco: 'nochebuena', banner: 'ESPECIAL NOCHEBUENA', hashtag: '#BoomNochebuena', paleta: pal(['#0a3a20', '#20a050', '#d8ffd0'], '#020a04', 0xffd700, 0xffd700, 0xffd040, 0xffd700, [0xffd060, 0x40ff80], 0x020803),
    saludo: '¡Feliz Nochebuena! Bienvenidos a un ¡Boom! muy especial, antes de la cena en familia.' },
  navidad: { name: 'Navidad', emoji: '🎄', deco: 'navidad', banner: 'ESPECIAL NAVIDAD', hashtag: '#BoomNavidad', festivo: true, paleta: pal(['#0f3fd0', '#3f8cff', '#cfe8ff'], '#030716', 0xffc050, 0xff5cc8, 0xff6ab0, 0xff8a20, [0x3f7dff, 0xff3a3a], 0x02040e),
    saludo: '¡Feliz Navidad! Bienvenidos al especial navideño de ¡Boom! Que la única bomba que explote hoy sea la de alegría.' },
  carnaval: { name: 'Carnaval', emoji: '🎭', deco: 'carnaval', banner: 'ESPECIAL CARNAVAL', hashtag: '#BoomCarnaval', festivo: true, paleta: pal(['#3c096c', '#7b2cbf', '#00f5d4'], '#05020a', 0xfee440, 0x00f5d4, 0xff00aa, 0xfee440, [0xff00aa, 0x00f5d4], 0x05020a),
    saludo: '¡Bienvenidos al Carnaval de ¡Boom! Hoy hasta las bombas vienen disfrazadas.' },
  nochevieja: { name: 'Fin de Año', emoji: '🥂', deco: 'finanio', banner: 'ESPECIAL FIN DE AÑO', hashtag: '#BoomFinDeAño', festivo: true, paleta: pal(['#4a3008', '#c89a30', '#fff4c0'], '#050402', 0xffffff, 0xffd040, 0xffe080, 0xffd040, [0xffd060, 0xffffff], 0x040302),
    saludo: '¡Bienvenidos al especial de fin de año de ¡Boom! Despedimos el año a lo grande… ¡y con mucha mecha!' },
  verano: { name: 'Verano', emoji: '🏖️', deco: 'verano', banner: 'ESPECIAL VERANO', hashtag: '#BoomVerano', paleta: pal(['#0077b6', '#00b4d8', '#fff3b0'], '#02101a', 0xffd166, 0xffd166, 0xef476f, 0xffd166, [0xffd166, 0xffffff], 0x021018),
    saludo: '¡Bienvenidos al especial de verano de ¡Boom! Crema solar, chanclas… y nervios de acero.' },
  especial300: { name: 'Especial 300 suscriptores', emoji: '🏆', deco: 'campeones', banner: 'ESPECIAL 300 SUSCRIPTORES', hashtag: '#Boom300', festivo: true, paleta: 'dorado',
    saludo: '¡Bienvenidos a este ¡Boom! muy especial! Está dedicado a los suscriptores del canal de YouTube «Ikeriano el campeón 2».', extra: ['¡Ya sois 300! Muchas gracias por estar ahí. ¡Vamos con el programa!'] },
  sanvalentin: { name: 'San Valentín', emoji: '💘', deco: 'sanvalentin', banner: 'ESPECIAL SAN VALENTÍN', hashtag: '#BoomSanValentín', paleta: pal(['#590d22', '#c9184a', '#ffccd5'], '#0c0204', 0xffccd5, 0xff8fa3, 0xff4d6d, 0xff8fa3, [0xff4d6d, 0xffccd5], 0x0c0204),
    saludo: '¡Feliz San Valentín! Hoy en ¡Boom! los corazones laten más rápido que las mechas.' },
  semanasanta: { name: 'Semana Santa', emoji: '🕊️', deco: 'semanasanta', banner: 'ESPECIAL SEMANA SANTA', hashtag: '#BoomSemanaSanta', paleta: pal(['#1d0829', '#3c1053', '#d4af37'], '#040106', 0xd4af37, 0xd4af37, 0xa67c00, 0xd4af37, [0x8e44ad, 0xffcc80], 0x040106),
    saludo: 'Bienvenidos al especial de Semana Santa de ¡Boom! Torrijas en la mesa y cables en el atril.' },
  famosos: { name: 'Famosos', emoji: '🎤', deco: 'famosos', banner: 'ESPECIAL FAMOSOS', hashtag: '#BoomFamosos', paleta: null, festivo: true,
    saludo: '¡Bienvenidos al especial de famosos de ¡Boom! Hoy juegan estrellas… inventadas, eso sí.' },
  campeones: { name: 'Campeones', emoji: '🥇', deco: 'campeones', banner: 'SEMANA DE CAMPEONES', hashtag: '#BoomCampeones', paleta: 'dorado',
    saludo: '¡Bienvenidos a la semana de campeones de ¡Boom! Solo juegan los mejores equipos de la historia.' },
};
export function paletaDe(id, colorClasico = 'azul') {
  const t = THEMES[id] || THEMES.clasico;
  if (!t.paleta) return TEMAS[colorClasico] || TEMAS.azul;
  if (typeof t.paleta === 'string') return TEMAS[t.paleta];
  return t.paleta;
}

// Preguntas temáticas (se mezclan con las generales en la bomba bote y la clasificatoria)
export const POOLS = {
  navidad: { bote: [['Árbol que se suele decorar en Navidad', 'Abeto|pino'], ['Planta de hojas rojas típica de Navidad', 'Flor de Pascua|poinsettia'], ['Nombre del primer premio de la Lotería de Navidad', 'El Gordo|Gordo'], ['Dulce navideño de almendra y miel', 'Turrón'], ['Lo que cae del cielo en una Navidad blanca', 'Nieve']],
    clas: [['¿Cuántos Reyes Magos hay?', ['3', '4'], 0], ['¿Qué día se celebra Navidad?', ['25 de diciembre', '24 de diciembre'], 0]] },
  nochebuena: { bote: [['Misa de medianoche de Nochebuena: misa del…', 'Gallo'], ['Carbonero que trae regalos en el País Vasco y Navarra', 'Olentzero'], ['Pescado en salazón que se cena en muchas casas', 'Bacalao'], ['Figuras que representan el nacimiento de Jesús', 'Belén|nacimiento'], ['Canción típica de Navidad', 'Villancico']],
    clas: [['¿Nochebuena es el 24 o el 25 de diciembre?', ['24', '25'], 0], ['¿El Olentzero es vasco o andaluz?', ['Vasco', 'Andaluz'], 0]] },
  nochevieja: { bote: [['Número de uvas que se comen con las campanadas', '12|doce'], ['Plaza de Madrid donde se dan las campanadas', 'Puerta del Sol|Sol'], ['Último día del año en España', 'Nochevieja|31 de diciembre'], ['Bebida espumosa para brindar', 'Cava|champán|champan'], ['Fruta que se come con las campanadas', 'Uva|uvas']],
    clas: [['¿Cuántas campanadas suenan a medianoche?', ['12', '10'], 0], ['¿Año Nuevo es el 1 de enero?', ['Sí', 'No'], 0]] },
  halloween: { bote: [['Hortaliza que se vacía y se talla con una cara', 'Calabaza'], ['Conde vampiro creado por Bram Stoker', 'Drácula|Dracula'], ['Mes en el que se celebra Halloween', 'Octubre'], ['Mamífero volador que duerme cabeza abajo', 'Murciélago'], ['En Halloween los niños piden: ¿truco o…?', 'Trato']],
    clas: [['¿Halloween es el 31 de octubre?', ['Sí', 'No'], 0], ['¿Samhain era una fiesta celta o romana?', ['Celta', 'Romana'], 0]] },
  carnaval: { bote: [['Objeto que cubre la cara en Carnaval', 'Máscara|antifaz'], ['Ciudad andaluza famosa por sus chirigotas', 'Cádiz'], ['Entierro con el que acaba el Carnaval: el entierro de la…', 'Sardina'], ['Isla canaria con un gran Carnaval en su capital', 'Tenerife|Gran Canaria'], ['Ciudad italiana del Carnaval de las máscaras', 'Venecia']],
    clas: [['¿El Carnaval se celebra antes o después de la Cuaresma?', ['Antes', 'Después'], 0]] },
  sanvalentin: { bote: [['Mes en el que se celebra San Valentín', 'Febrero'], ['Dios romano del amor con arco y flechas', 'Cupido'], ['Flor que se regala en San Valentín', 'Rosa'], ['Órgano que simboliza el amor', 'Corazón'], ['Día del mes de San Valentín', '14|catorce']],
    clas: [['¿San Valentín es el 14 de febrero?', ['Sí', 'No'], 0]] },
  semanasanta: { bote: [['Periodo de cuarenta días antes de Semana Santa', 'Cuaresma'], ['Domingo con el que empieza la Semana Santa', 'Ramos|Domingo de Ramos'], ['Dulce de pan frito típico de Semana Santa', 'Torrija|torrijas'], ['Instrumento que resuena durante horas en Calanda', 'Tambor'], ['Gorro alto y puntiagudo de los nazarenos', 'Capirote']],
    clas: [['¿La Semana Santa acaba el Domingo de Resurrección?', ['Sí', 'No'], 0]] },
  verano: { bote: [['Estación más calurosa del año', 'Verano'], ['Sopa fría andaluza de tomate', 'Gazpacho'], ['Lo que se pone para protegerse del sol', 'Crema solar|protector solar|gorra'], ['Mes del año con el día más largo en España', 'Junio'], ['Lugar con arena junto al mar', 'Playa']],
    clas: [['¿El verano empieza en junio en España?', ['Sí', 'No'], 0]] },
  ninos: { bote: [['Animal que dice «guau»', 'Perro'], ['Color del cielo en un día despejado', 'Azul'], ['Número de ruedas de una bicicleta', '2|dos'], ['Personaje de cuento que pierde un zapato de cristal', 'Cenicienta'], ['Animal que pone huevos y hace «cocoricó» si es macho', 'Gallo|gallina']],
    clas: [['¿Las vacas dan leche?', ['Sí', 'No'], 0], ['¿Cuántas patas tiene un perro?', ['4', '6'], 0]] },
};
