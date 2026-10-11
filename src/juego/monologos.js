// Monólogos ORIGINALES del presentador virtual (misma idea que el APK: con el público, al teléfono y cambiando las normas)
export const MONOLOGOS = [
  { id: 'pub-saludo', tipo: 'publico', titulo: 'Bajando a saludar', cam: 'publico', lineas: [
    '¡Un momento, un momento! Antes de empezar voy a saludar a mi gente de las gradas.',
    '¡Hola, hola! ¿Qué tal estáis? Señora de la tercera fila, ¡ese abanico es más rápido que nuestra mecha!',
    'Caballero, ¿usted viene todos los días? ¡Si ya tiene hasta su butaca con nombre!',
    'Y vosotros, los del fondo, ¡aplaudid fuerte, que si no la bomba se duerme!',
    '¡Muchas gracias! Me vuelvo al plató antes de que alguien corte un cable sin mí.'] },
  { id: 'pub-cumple', tipo: 'publico', titulo: 'Un cumpleaños en el público', cam: 'publico', lineas: [
    'Me dice producción que hoy hay alguien de cumpleaños en el público.',
    '¡Ahí está! ¡Felicidades! ¿Cuántos cumples? No, no me lo digas, que lo dice la mecha.',
    'Aquí no tenemos velas… tenemos bombas. ¡Pide un deseo y sopla, pero flojito!',
    '¡Un aplauso para nuestra cumpleañera! Y ahora sí: ¡empezamos!'] },
  { id: 'tel-mama', tipo: 'telefono', titulo: 'Llama mi madre', cam: 'presentador', lineas: [
    '¡Perdonad, perdonad! Me está sonando el móvil… ¡Es mi madre! No puedo no cogerlo.',
    '¿Sí, mamá? Sí, estoy trabajando. Sí, en la tele. No, mamá, las bombas no son de verdad.',
    '¿Que si he comido? Mamá, que estamos en directo… Sí, un bocadillo de tortilla.',
    '¿Que corte el cable azul? Mamá, ¡que no te puedo dar las respuestas!',
    'Vale, te quiero, adiós. Perdonad… es que mi madre ve todos los programas. ¡Y acierta más que yo!'] },
  { id: 'tel-tecnico', tipo: 'telefono', titulo: 'El técnico de las bombas', cam: 'bombas', lineas: [
    'Un segundo, que me llama el técnico de las bombas.',
    '¿Sí? ¿Que la bomba tres hace un ruido raro? ¿Qué ruido? ¿Tic-tac? ¡Eso es normal, hombre!',
    '¿Que se te ha olvidado qué cable era el bueno? ¡Pues como a todos los concursantes!',
    'Nada, nada, todo controlado. Bueno… casi todo. ¡Seguimos!'] },
  { id: 'normas-nuevas', tipo: 'normas', titulo: 'Cambiando las normas', cam: 'general', lineas: [
    'Atención, que hoy tengo normas nuevas para el programa.',
    'Norma uno: prohibido cortar cables con los dientes. Sí, alguien lo intentó.',
    'Norma dos: si la bomba explota, no vale decir «yo no he sido».',
    'Norma tres: el presentador siempre tiene razón… salvo cuando se equivoca.',
    'Y norma cuatro: ¡aquí se viene a disfrutar! Bueno, y a ganar el bote. ¡Vamos allá!'] },
];
export const TIPO_ICONO = { publico: '👏', telefono: '📱', normas: '📜' };
export const TIPO_TXT = { publico: 'Con el público', telefono: 'Al teléfono', normas: 'Cambiando las normas' };
