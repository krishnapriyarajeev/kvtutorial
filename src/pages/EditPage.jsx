import { useParams } from "react-router-dom";
import Form from "../components/Form";


const EditEmployee = () => {

  const {id} = useParams();
  // console.log(id);



  return (
    <div className="create-emp-wrapper">
      <section className="heading">
        <h1>Edit Employee</h1>
      </section>

      <Form id={id} dis={true} vis={true}/>
      
    </div>
  );
};

export default EditEmployee;