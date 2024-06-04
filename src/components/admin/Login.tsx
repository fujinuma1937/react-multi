import icon from "/icon.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const loginDataSchema = z.object({
    id: z.string().min(1, "idを入力してください"),
    password: z.string().min(1, "パスワードを入力してください"),
  });
  type loginDataType = z.infer<typeof loginDataSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginDataType>({ resolver: zodResolver(loginDataSchema) });

  const initialLogin: SubmitHandler<loginDataType> = async (data) => {
    const response = await axios.post(`${apiUrl}/login.php?API_KEY=${apiKey}`, {
      data,
    });
    if (response.status === 200) {
      console.log("ログイン成功");
    } else {
      console.log("ログイン失敗");
    }
  };

  return (
    <main className="relative w-screen h-screen bg-gray-100 font-gothic">
      <form onSubmit={handleSubmit(initialLogin)}>
        <Card className="absolute left-0 right-0 top-0 bottom-0 m-auto h-fit w-11/12 md:w-fit">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl text-center">
              管理画面ログイン
            </CardTitle>
            <img
              className="w-1/5 object-contain m-auto"
              src={icon}
              alt="アイコン"
            />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="id">ログインID</Label>
                <Input id="id" type="text" {...register("id")} />
                {errors.id && (
                  <span className="text-red-700 text-sm">
                    {errors.id.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">パスワード</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <span className="text-red-700 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <Button type="submit" className="w-fit ml-auto">
                ログイン
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </main>
  );
};
export default Login;
