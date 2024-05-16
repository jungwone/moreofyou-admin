import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signup() {
  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold text-center">회원가입</h1>
      <form className="max-w-sm px-5 mx-auto">
        <div className="mt-5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            required
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="name">이름</Label>
          <Input
            id="name"
            type="text"
            placeholder="이름을 입력해주세요."
            required
          />
        </div>

        <div className="mt-5">
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            required
          />
        </div>
        <div className="mt-5">
          <Label htmlFor="password-confirm">비밀번호 확인</Label>
          <Input
            id="password-confirm"
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            required
          />
        </div>

        <div className="flex">
          <Button variant={"default"} className="mt-5" type="submit">
            회원가입
          </Button>
        </div>
      </form>
    </div>
  );
}
