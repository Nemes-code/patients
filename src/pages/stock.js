import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "../index.css";

const schema = z
  .object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    password: z.string().min(5).max(20),
    comfirmPassword: z.string().min(5).max(20),
  })
  .refine((data) => data.password === data.comfirmPassword, {
    message: "password do not match",
    path: ["comfirmPassword"],
  });

function Stock() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    console.log("It Worked", data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitData)}>
        <h1>STOCK REGISTRATION</h1>
        <div>
          <label> Product Name:</label>
        </div>
        <div>
          <input type="text" className="inp" {...register("firstName")} />
        </div>
        <div>
          {errors.firstName && (
            <span className="err">{errors.firstName.message}</span>
          )}
        </div>
        <div>
          <label> Product Company:</label>
        </div>
        <div>
          <input type="text" className="inp" {...register("lastName")} />
          {errors.lastName && (
            <span className="err">{errors.lastName.message}</span>
          )}
        </div>
        <div>
          <label> Expiry Date:</label>
        </div>
        <div>
          <input type="text" className="inp" {...register("email")} />
          {errors.email && <span className="err">{errors.email.message}</span>}
        </div>
        <div>
          <label> Price:</label>
        </div>
        <div>
          <input
            type="number"
            className="inp"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <span className="err">{errors.age.message}</span>}
        </div>

        <div>
          <label> VAT:</label>
        </div>
        <div>
          <input type="text" className="inp" {...register("password")} />
          {errors.password && (
            <span className="err">{errors.password.message}</span>
          )}
        </div>

        <label> Discount:</label>
        <input type="text" {...register("comfirmPassword")} />
        {errors.comfirmPassword && (
          <span className="err">{errors.comfirmPassword.message}</span>
        )}
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Stock;
