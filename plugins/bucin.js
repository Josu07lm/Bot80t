let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Elijo estar solo, no por esperar lo perfecto, pero nunca tengo que rendirme",
  "Se creó una sola persona con una pareja que no había encontrado",
"A menudo tuve personas importantes en mi, la mejor es.. MI DIOS MΣᄂIӨDΛƧ😈🙏",
  "Solteros. Tal vez sea la forma de Dios de decir 'Descansa del amor equivocado'.",
  "Los solteros son jóvenes que priorizan su desarrollo personal para un amor con más clase en el futuro",
  "No busco a alguien que sea perfecto, sino a alguien que se vuelva perfecto gracias a mi fuerza",
  "El novio de alguien es nuestro alma gemela pendiente",
  "Los solteros deben pasar. Todo llega un momento, cuando toda soledad se convierte en unión con su amante halal. Ten paciencia.",
  "Romeo está dispuesto a morir por Julieta, Jack murió porque salvó a Rose. En esencia, si todavía quieres vivir, sé soltero",
  "Busco personas no por sus fortalezas, sino por su sinceridad",
  "Matchmaking no son chanclas, que a menudo se confunden. Por lo tanto, debe continuar en la lucha que debe ser",
  "Si eres la cuerda de la guitarra, yo no quiero ser el guitarrista. Porque no quiero romper contigo",
  "Si amarte es una ilusión, déjame imaginar para siempre",
  "Cariño ... Mi trabajo es solo amarte, no contra el destino",
"Cuando estoy contigo se siente como 1 hora y solo 1 segundo, pero si estoy lejos de ti, parece que 1 día se convierte en 1 año",
  "La compota de plátano sabe sumedang, aunque la distancia se extienda, mi amor nunca desaparecerá",
  "Quiero ser el único, no el único",
  "No puedo prometer ser bueno. Pero prometo estar siempre ahí para ti",
  "Si me convierto en representante del pueblo definitivamente fracasaré, ¿cómo quieres pensar en la gente si todo lo que tengo en mente eres tú?",
  "Mira mi jardín, lleno de flores. Mira tus ojos, mi corazón está floreciendo",
  "Promete estar conmigo ahora, mañana y siempre",
  "Desaparecer surge no solo por la distancia. También por deseos que no se hacen realidad",
  "Nunca estarás lejos de mí, donde sea que vaya tú siempre estás ahí, porque siempre estás en mi corazón, que es solo nuestro cuerpo, no nuestro corazón",
  "Sé que en cada una de mis miradas, estamos bloqueados por la distancia y el tiempo. Pero estoy seguro de que luego nos uniremos",
  "Extrañarte sin ni siquiera conocerte es como crear una canción que nunca se canta",
  "Hay momentos en que la distancia es siempre una barrera entre tú y yo, pero aún en mi corazón siempre estamos cerca",
  "Si este corazón no puede contener todo el anhelo, qué poder puedo hacer sino orar por ti".
"Tal vez en este momento sólo pueda soportar este anhelo. Hasta que llegue el momento puedo encontrarme y dejar ir este anhelo contigo",
  "A través del anhelo que se enciende en mi corazón, a veces realmente necesito un abrazo de tu amor",
  "En la noche fría, ya no recuerdo; con qué frecuencia pienso en ti también te extraño",
  "Extrañarte es como una lluvia que viene de repente y dura mucho tiempo. E incluso después de que la lluvia amainó, todavía la extrañaba",
  "Desde que te conocí, naturalmente quiero seguir aprendiendo, aprendiendo a ser el mejor para ti",
  "¿Sabes la diferencia entre tu pensi y tu cara? Si el lápiz de escribir se puede borrar, pero si tu cara no está no habrá nada que se pueda borrar de mi mente.",
  "No es el Examen Nacional de mañana de lo que tengo que preocuparme, sino la prueba de vida por la que pasé después de que me dejaste",
  "Una cosa que la felicidad en la escuela me mantiene emocionado es poder ver tu sonrisa todos los días",
  "¿Sabes la diferencia entre ir a la escuela e ir a tu casa? Cuando vas a la escuela, definitivamente lo que traes son libros y bolígrafos, pero si vas a tu casa, solo necesito traer mi corazón y amor".
  "No estoy triste si mañana es lunes, estoy triste si no te veo",
  "Mi momento amoroso es perpendicular a tu momento amoroso. Haciendo de nuestro amor un punto de equilibrio perfecto",
  "Estoy dispuesto a participar en una carrera alrededor del mundo, siempre y cuando tú estés en la meta",
  "Mi tarea te extraña. Más fuerte que las matemáticas, más amplio que la física, más fuerte que la biología",
  "Mi amor por ti es como un metabolismo, que no se detendrá hasta la muerte",
  "Si la distancia es como tú, iré a recogerte, haré cola en casa",
  "Come lo que me guste de ti, incluido comer hígado",
  "El amor es como una sentencia de muerte. Si no te disparan, te cuelgan",
  "Amarte es como una droga: una vez que intentas ser adictivo, sin intentar hacerte sentir curioso, dejar atrás te hace abstinencia",
  "Lo que más me gusta es picar porque picar es delicioso. Además, tenerte completamente ...",
  "Este mundo nos pertenece sólo a nosotros dos. Los otros simplemente se están contrayendo",
  "Para mí, todos esos días son martes. Martes en el cielo si cerca de ti ...",
  "¿Y si los dos nos convertimos en delincuentes de bandas? Te robé el corazón y tú me robaste el mío",
  "Eres como el café que tomé esta mañana. Amargo, pero adictivo",
  "A menudo tengo celos de tu lápiz labial. Él puede besarte todos los días, de la mañana a la noche",
  "Solo escuchar tu nombre puede hacerme sonreír como un tonto",
  "Sé que tu amiga no es solo una, y gustarle no es solo a mí",
  "Desde que dejé de esperarte, no estoy emocionado por todo ..",
  "Contigo, enamorarse es el desamor más deliberado",
  "Es muy difícil sentir la felicidad de la vida sin tu presencia a mi lado".
  "A través del anhelo que se enciende en mi corazón, a veces realmente necesito un abrazo de tu amor",
  "Si lo sabes, hasta ahora te sigo amando",
  "A veces tengo celos de las cometas ... los atals se rompen y todavía me persiguen y no quiero que me tomen otras personas ...",
  "No sabía lo que era el amor, hasta que finalmente te conocí. Pero, en ese momento supe que era un desamor",
  "Perseguir es cansado, pero aún más cansado de esperar \ nEsperando a que notes mi existencia ...",
  "No dejes de amar solo porque te han herido. Porque no hay arcoíris sin lluvia, no hay amor verdadero sin llorar",
  "Tengo un millón de razones para olvidarte, pero nada puede obligarme a dejar de amarte",
  "A veces alguien se siente tan estúpido por amar a alguien",
  "Eres el mejor desamor del que nunca me he arrepentido",
  "No es que no valga la pena la espera, es solo que a menudo da falsas esperanzas",
  "Una parte de mí está sufriendo, recordándola muy cerca, pero intocable",
  "Lo mejor de amar a alguien es orar en secreto por ellos",
  "Espero poder deshacerme de este sentimiento tan pronto como te pierda",
  "Por amor nos engañamos a nosotros mismos. Tratar de ser fuertes en realidad es deshonroso",
  "Piensa en mí como tu casa, si vas ya sabes dónde ir a casa. Quédate si quieres y vete cuando estés aburrido ...",
  "Estoy confundido, ¿debería estar decepcionado o no? Si estoy decepcionado, ¿quién soy yo para él? \ N \ nSi no estoy decepcionado, pero estoy esperando sus palabras.",
  "Mi anhelo es como una rama que permanece en pie. Aunque ya no hay hojas que la acompañen, hasta que se seca, se rompe y muere",
  "Supongo que ahora somos solo dos extraños que tienen los mismos recuerdos",
  "Hazme capaz de odiarte aunque sea por unos minutos, para que no sea muy difícil olvidarte",
  "Te amo con todo mi corazón, pero incluso compartes tus sentimientos con los demás",
  "Amarte puede que me rompa, pero de alguna manera dejarte no me arregla",
  "Tú eres el primero y el primero en mi vida. Pero yo soy el segundo para ti",
  "Si solo podemos encontrarnos en un sueño, quiero dormir para siempre",
  "Verte feliz es mi felicidad, aunque seas feliz sin estar conmigo",
  "A veces envidio un objeto. No tengo gusto pero siempre lo necesito. A diferencia de mí que tiene sentimientos, pero es abandonado y descuidado ...",
  "¿Cómo podría moverme si solo a ti mi corazón se detuviera?",
  "Los recuerdos sobre ti son como mi hogar. De modo que cada vez que mis pensamientos se desvíen, seguramente los bordes siempre volverán a ti",
  "¿Por qué es útil el tejido? Porque el amor nunca se seca. - Sujiwo Tejo",
  "Si amarte es un error, está bien, déjame seguir equivocado",
  "Desde que te conozco, quiero seguir aprendiendo. Aprender es lo mejor para ti",
  "Alguien está actuando de forma estúpida solo para verte sonreír. Y se siente feliz por eso",
  "No soy una buena persona, pero aprenderé a ser el mejor para ti",
  "No estamos muertos, pero la herida nos impide caminar como antes",
 "Tu presencia es como una taza de café que necesito todas las mañanas, lo que puede animarme a mantenerme motivado para pasar el día",
  "Tengo muchas ganas de darte el mundo. Pero como no es posible, amaré lo más importante de mi vida, que es mi mundo",
  "La reparación es graciosa pero dulce, más que a veces romántica pero en última instancia trágica",
  "Ben finalmente no está decepcionado, necesitamos saber cuándo esperar y cuándo parar",
  "Yo, el zinc más empapado, no sé el significado de 'I Love U'. Pero solo Bertine 'Te amo'",
  "No necesitas ser bella y rica, simplemente no quiero estar triste",
  "Mi amor por ti es como una cámara, el enfoque en ti es otro borrón",
  "Todos los días tengo un sueño pero no puedo tenerlo",
  "No verte durante 30 días parece un mes",
  "Estoy sin ti como un gato sego perdido un tren. Ambyar.",
  "Desearía poder jugar. Para encontrarte mejor. Ben, tengo más tiempo para vivir contigo",
  "Nunca supe lo que era el amor, excepto cuando te conocí",
  "El amor que aa visitar no se perderá incluso si aa se casa de nuevo.",
  "Mi paciencia es limitada, pero mi amor por ti no es limitado",
  "Kanyaah no se desvanecerá incluso si uso Bayclean",
  "Maravillosos recuerdos de estar contigo roble y luego recordar olvidar.",
  "No podré vivir por mi cuenta, necesito la ayuda de otras personas",
  "Nyahna aa para el neg es como un banquero para cobrar deudas (vamos a mumhasta).",
  "Nuestra paciencia es limitada, pero nuestro amor por ti nunca terminará",
  "Quiero sentir todas las palabras de amor que hay en este mundo, y luego las voy a recolectar, para que conozcas la grandeza de mi amor por ti",
  "Cálmate, mi amor es como una canción de krispatih; el tiempo lo dirá",
  "No soy la persona perfecta para ti, ni soy la mejor para ti. Pero sin duda, soy la única persona que sigue recordándote",
  "Sólo se pierde la red, tú no",
  "A menudo está hecho para comer hígado. Pero darte cuenta de que todavía estás aquí te vuelve feliz",
  "Mis enemigos son los que también quieren tenerte",
  "Siempre hay muchos, pero si solo te quiero a ti, ¿cómo?",
  "Mi hora de dormir fue destrozada y arruinada por el anhelo",
  "Sólo China está muy lejos, nuestro amor no debería estar",
  "Lo importante es tu felicidad, de verdad no me importa ..",
  "Solo un deseo, amado por ti ...",
  "Estoy sin ti como una ambulancia sin una palabra",
  "Sólo un largo camino desde la Antártida. No nos dejes",
]
