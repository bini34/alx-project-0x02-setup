import React from "react";
import Button from "../components/common/Button";
import Header from "../components/layout/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </div>
      </div>
    </>
  );
}
