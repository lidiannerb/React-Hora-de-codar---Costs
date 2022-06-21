import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButton from "../Form/SubmitButton";
import styles from "./ProjectForm.module.css";

const ProjectForm = ({btnText}) => {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o valor do orçamento total"
      />
      <Select 
        name="categoty_id" 
        text="Selecione a categoria" />
      <SubmitButton text={btnText}/>
    </form>
  );
};

export default ProjectForm;


// O SubmitButton tem o texto dinamico, a prop (btnText) que está sendo passada e ele vem 
// do componente pai ProjectForm
// Essa propriedade está sendo usada na page NewProject, pois é lá que este botão está sendo usado para 
// criar um novo projeto, então o texto só faz sentido lá na page NewProject
 
// Resumo: 