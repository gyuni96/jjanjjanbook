import React from "react"
import { login } from "@/lib/actions/auth"
const LoginPage = () => {
  return (
    <div className="flex justify-center align-center min-h-screen bg-gray-100 py-12  ">
      <div className="flex flex-col w-1.5xl bg-white px-12 py-20 border-1 border-gray-300">
        <div className="p-2 flex flex-col">
          <span className="mr-2 text-gray-800">💵 짠짠북</span>
          <span className="text-gray-800 text-2xl">당신의 소비를 스마트하게 관리해보세요.</span>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
          <div className="border-1 border-gray-300 text-gray-700 py-3 px-3.5 text-center">
            Google
          </div>
          <div className="border-1 border-gray-300 text-gray-700 py-3 px-3.5 text-center">
            Naver
          </div>
          <div className="border-1 border-gray-300 text-gray-700 py-3 px-3.5 text-center">
            Kakao
          </div>
        </div>
        <div className="relative mb-8">
          <hr className="border-gray-300" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-700 text-sm">
            또는 이메일로 로그인
          </span>
        </div>
        <form action={login} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <input
              id="email"
              type="email"
              // {...register("email", {
              //   required: "이메일을 입력해주세요",
              //   pattern: {
              //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //     message: "올바른 이메일 형식을 입력해주세요",
              //   },
              // })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="이메일을 입력하세요"
            />
            {/* {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>} */}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              // {...register("password", {
              //   required: "비밀번호를 입력해주세요",
              //   minLength: {
              //     value: 6,
              //     message: "비밀번호는 최소 6자 이상이어야 합니다",
              //   },
              // })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="비밀번호를 입력하세요"
            />
            {/* {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )} */}
          </div>
          <button
            type="submit"
            // disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
