import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import icon from "/icon.png";

const Login = () => {
  return (
    <Card className="absolute left-0 right-0 top-0 bottom-0 m-auto h-fit w-11/12 md:w-fit md:min-w-96">
      <CardHeader>
        <CardTitle className="text-xl text-center">
          xxx管理メニューログイン
        </CardTitle>
        <img className="w-1/5 object-contain m-auto" src={icon} alt="アイコン" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="ID">ログインID</Label>
            <Input id="ID" type="text" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">パスワード</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-fit ml-auto">
            ログイン
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default Login;
