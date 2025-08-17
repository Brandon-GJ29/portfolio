import correo from './correo.png'
import person from './person.png'
import correoBlanco from './correoBlanco.png'
import personBlanco from './personBlanco.png'
import man from './man.png'
import mundoMex from './mundoMEX.png'
import mundoUSA from './mundoUSA.png'
import imagen1 from './imagen1.png'
import imagen5 from './imagen5.png'



export const assets ={
    correo,
    person,
    correoBlanco,
    personBlanco,
    man,
    mundoMex,
    mundoUSA,
}




// Proyectos
export const projects = [
  {
    _id: 1,
    name: "Segmentación de Mastocitos",
    description: "Segmentación y análisis de mastocitos en imágenes de patología utilizando técnicas de Deep Learning. Se implementó U-Net para generar máscaras binarias y superponer contornos sobre las imágenes originales, optimizando la identificación y análisis de mastocitos para investigación biomédica.",
    image: [imagen1],
    category: ["Machine Learning", "Deep Learning", "Computer Vision", "Biomedical Imaging"],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Anaconda", "Matplotlib", "scikit-learn", "PIL (Pillow)"],
    tools: ["Labelme", "Visual Studio Code", "Jupyter Notebook"],
    featured: true,
    repository: "https://github.com/usuario/proyecto-mastocitos"
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
    repository: ""
  },
  {
    _id: 3,
    name: "Proyecto React/Node",
    description: "Aplicación web completa con React y Node.js.",
    image: imagen5,
    category: ["Web Development"],
    stack: ["React", "Node.js"],
    tools: ["TailwindCSS", "Express"],
    featured: false,
    repository: ""
  }
];