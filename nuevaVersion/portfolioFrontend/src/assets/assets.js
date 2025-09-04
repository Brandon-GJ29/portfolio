import correo from './correo.png'
import person from './person.png'
import correoBlanco from './correoBlanco.png'
import personBlanco from './personBlanco.png'
import man from './man.png'
import github from './github.png'
import mundoMex from './mundoMEX.png'
import mundoUSA from './mundoUSA.png'
import imagen1 from './imagen1.png'
import imagen2 from './imagen2.png'
import imagen3 from './imagen3.png'
import imagen4 from './imagen4.png'
import imagen5 from './imagen5.png'
import imagen6 from './imagen6.png'



export const assets ={
    correo,
    person,
    correoBlanco,
    personBlanco,
    man,
    mundoMex,
    mundoUSA,
    github
}




// Proyectos
export const projects = [
  {
    _id: 1,
    name: "Segmentación de Mastocitos",
    description: "Segmentación y análisis de mastocitos en imágenes de patología utilizando técnicas de Deep Learning. Se implementó U-Net para generar máscaras binarias y superponer contornos sobre las imágenes originales, optimizando la identificación y análisis de mastocitos para investigación biomédica.",
    image: [ imagen2, imagen3, imagen4, imagen5],
    category: ["Machine Learning"],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Anaconda", "Matplotlib", "scikit-learn", "PIL (Pillow)"],
    tools: ["Labelme", "Visual Studio Code", "Jupyter Notebook"],
    featured: true,
    repository: "https://github.com/usuario/proyecto-mastocitos",

    description1:"En este proyecto desarrollamos un sistema computacional para el análisis y segmentación de mastocitos en imágenes de patología, con el objetivo de facilitar su identificación y contribuir al diagnóstico clínico y la investigación biomédica. Reconocimos la importancia de estas células en procesos inflamatorios, alérgicos y en diversas enfermedades, por lo que buscamos automatizar su detección mediante técnicas de procesamiento digital de imágenes y modelos de aprendizaje profundo, reduciendo así el tiempo y los recursos necesarios en comparación con los métodos manuales.",
    description2:"Para llevarlo a cabo, trabajamos en varias etapas. Primero, realizamos el preprocesamiento de las imágenes mediante su redimensionamiento y estandarización. Posteriormente, utilizamos la herramienta Labelme para el etiquetado manual de mastocitos y la creación de máscaras binarias que sirvieron como base para el entrenamiento del modelo. Finalmente, implementamos la arquitectura U-Net, reconocida por su eficacia en aplicaciones biomédicas de segmentación, debido a su capacidad de extraer información contextual y generar delimitaciones precisas incluso en escenarios con conjuntos de datos reducidos.",
    description3:"Los resultados obtenidos mostraron que nuestro modelo fue capaz de generar máscaras de segmentación y superponer contornos sobre las imágenes originales, lo que permitió validar visualmente las predicciones y obtener representaciones claras de los mastocitos."
  },
  {
    _id: 2,
    name: "Detección de Mastocitos 2",
    description: "Otro proyecto de ejemplo en Machine Learning.",
    image: correoBlanco,
    category: ["Machine Learning", "Artificial Intelligence"],
    stack: ["Python", "Anaconda"],
    tools: ["numpy"],
    featured: true,
    repository: "",
    description1:"",
    description2:"",
    description3:""
  },
  {
    _id: 3,
    name: "Proyecto React/Node",
    description: "Aplicación web completa con React y Node.js.",
    image: imagen6,
    category: ["Web Development"],
    stack: ["React", "Node.js"],
    tools: ["TailwindCSS", "Express"],
    featured: false,
    repository: "",
    description1:"",
    description2:"",
    description3:""
  }
];