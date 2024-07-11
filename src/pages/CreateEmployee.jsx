import Button from "../components/Button";
import TextField from "../components/TextField";
import Options from "../components/Options";

const roleOptions = [
  {
    id: 1,
    val: "",
    label: "Role",
  },
  {
    id: 2,
    val: "SD",
    label: "Software Developer",
  },
  {
    id: 3,
    val: "Test",
    label: "Tester",
  },
];

const statusOptions = [
  {
    id: 1,
    val: "",
    label: "Status",
  },
  {
    id: 2,
    val: "Probation",
    label: "Probation",
  },
  {
    id: 3,
    val: "Permanent",
    label: "Permanent",
  },
];

const field = [
  {
    id: 1,
    label: "Employee name",
    placeholder: "Employee name",
  },
  // {
  //     id: 2,
  //     label: "Employee ID",
  //     placeholder: "Employee ID"
  // },
  {
    id: 2,
    label: "Joining date",
    placeholder: "Joining date",
  },
  {
    id: 3,
    label: "Role",
    name: "role",
    op: roleOptions,
    Component: Options,
  },
  {
    id: 4,
    label: "Status",
    name: "status",
    op: statusOptions,
    Component: Options,
  },
  {
    id: 5,
    label: "Experience",
    placeholder: "Experience",
  },
  {
    id: 6,
    label: "Address",
    placeholder: "Address",
  },
];

const CreateEmployee = () => {
  return (
    <div className="create-emp-wrapper">
      <section className="heading">
        <h1>Create Employee</h1>
      </section>

      <section className="formflex">
        <form className="form1">
          {field.map((item) => {
            return item.Component ? (
              <item.Component key={item.id} label={item.label} op={item.op} />
            ) : (
              <TextField label={item.label} placeholder={item.placeholder} />
            );
          })}
        </form>
        <Button className="button1" text="Create" />
        <Button className="button2" text="Cancel" />
      </section>
    </div>
  );
};

export default CreateEmployee;
