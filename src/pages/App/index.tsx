import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  age: z.number().min(10),
});

type FormData = z.infer<typeof schema>;

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { t } = useTranslation();

  return (
    <>
      <h1>{t("title", { name: "David" })}</h1>
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <input {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age?.message && <p>{errors.age?.message}</p>}
        <input type="submit" />
      </form>
    </>
  );
};

export default App;
