import Image from 'next/image'

const data = {
    image_1: {
        src: '/sunshine/img-1.jpg',
        alt: 'Image 1',
        description: "Cada día a tu lado es un regalo que valoro profundamente. Tu amor llena mi vida de felicidad y significado. No puedo esperar para crear más recuerdos juntos."
    },
    image_2: {
        src: '/sunshine/img-2.jpg',
        alt: 'Image 2',
        description: "Eres mi refugio en este mundo caótico. Te amo infinitamente y agradezco cada día que paso contigo. Eres la razón por la que mi corazón late con alegría."
    },
    image_3: {
        src: '/sunshine/img-3.jpg',
        alt: 'Image 3',
        description: "Tú iluminas mi vida con cada sonrisa que me regalas. Cada momento a tu lado se convierte en un recuerdo especial. Eres mi razón para sonreír y mi amor eterno."
    },
    image_4: {
        src: '/sunshine/img-4.jpeg',
        alt: 'Image 4',
        description: "Eres la melodía que llena mi corazón de alegría. Tu presencia es como una canción que nunca deja de tocar en mi mente. No puedo esperar para seguir bailando al ritmo de nuestro amor."
    },
    image_5: {
        src: '/sunshine/img-5.jpg',
        alt: 'Image 5',
        description: "Contigo, cada día es una aventura que anhelo. Tus abrazos son mi refugio y tus besos son mi felicidad. Eres mi amor eterno y mi compañera de vida."
    },
    image_6: {
        src: '/sunshine/img-6.jpg',
        alt: 'Image 6',
        description: "Eres mi paz en medio del caos. Tu amor es mi ancla en las tormentas de la vida. Te amo con todo mi ser y siempre estaré a tu lado."
    },
    image_7: {
        src: '/sunshine/img-7.jpg',
        alt: 'Image 7',
        description: "Cada momento a tu lado es un tesoro que atesoro. Eres mi mayor alegría y mi razón para dar lo mejor de mí. Nuestro amor es un regalo que valoro cada día."
    },
    image_8: {
        src: '/sunshine/img-8.jpeg',
        alt: 'Image 8',
        description: "Tu amor es mi razón para despertar cada mañana con una sonrisa en el rostro. Eres mi inspiración y mi apoyo constante. Siempre serás mi amor eterno."
    },
    image_9: {
        src: '/sunshine/img-9.jpg',
        alt: 'Image 9',
        description: "Eres mi faro en la oscuridad, mi amor eterno que guía mi camino. Tu amor es inquebrantable y mi corazón te pertenece por siempre."
    },
    image_10: {
        src: '/sunshine/img-10.jpg',
        alt: 'Image 10',
        description: "A tu lado, cada día es un sueño hecho realidad. Tu amor es el ingrediente secreto que hace que la vida sea hermosa. Te amo más de lo que las palabras pueden expresar."
    },
    image_11: {
        src: '/sunshine/img-11.jpg',
        alt: 'Image 11',
        description: "Eres mi mayor alegría, mi bendición, mi amor eterno. Agradezco cada día que paso contigo y espero con emoción todo lo que el futuro nos depara."
    },
    image_12: {
        src: '/sunshine/img-12.jpg',
        alt: 'Image 12',
        description: "Mi vida es más hermosa desde que entraste en ella. Tu amor ha transformado mi mundo y me ha dado un propósito más profundo. Eres mi amor eterno y mi razón de ser."
    },
};

function ImageGrid({ data }) {
    return (
        <div className='flex flex-col justify-items-center items-center gap-y-5 pt-5 xl:grid xl:grid-cols-4'> {/*grid grid-cols-4*/}
            {Object.keys(data).map((key) => {
                const { src, alt, description } = data[key];
                return (
                    <div key={key} className='relative h-[445px] group flex items-center justify-center bg-slate-700'>
                        <div className='flex w-[95%] h-auto gap-6'>
                            <Image
                                className='w-[250px]'
                                src={src}
                                width={200}
                                height={50}
                                alt={alt}
                            />
                            <div className='flex absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-center hover:cursor-help justify-center '>
                                <p className='px-6 pt-6 text-2xl text-white'>{description}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export default function Galery() {
    return (
        <ImageGrid data={data} />
    )
}