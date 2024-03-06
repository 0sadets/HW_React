import { useForm } from "react-hook-form";
import "../App.css";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    console.log(`Login data : `, user);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>NickName:</label>
          <input
            {...register("name", {
              required: true,
              minLength: 4,
            })}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: true,
            })}
            type="text"
            name="email"
          />
        </div>
        <div>
          <label>Sex:</label>
          <input {...register("sex")} type="text" name="sex" />
        </div>
        <div>
          <label>Old:</label>
          <input {...register("old")} type="number" name="old" />
        </div>
        <div id="btn">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}
