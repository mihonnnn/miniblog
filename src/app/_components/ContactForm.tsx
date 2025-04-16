"use client";
import { submitContactForm } from "@/lib/actions/contact";

export default function ContactForm() {
  return (
    <div>
      <form action={submitContactForm}>
        <div className="py-24 text-gray-600">
          <div className="mx-auto flex flex-col bg-white shadow-md p-8 md:w-1/2">
            <h2 className="test-lg mb-2">お問い合わせ</h2>
            <label htmlFor="name" className="text-sm mb-2">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 forcus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8"
            />
            <label htmlFor="email" className="text-sm mt-2 mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 forcus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8"
            />
            <button className="text-white bg-indigo-500 mt-5 py-2 px-6 hover:bg-indigo-600 rounded text-lg">
              送信
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
