import Form from "../components/Form";


const CreateEmployee = () => {

  // const userNameRef = useRef();

  return (
    <div className="create-emp-wrapper">
      <section className="heading">
        <h1>Create Employee</h1>
      </section>

      <Form def={true} vis={false}/>
      
    </div>
  );
};

export default CreateEmployee;
