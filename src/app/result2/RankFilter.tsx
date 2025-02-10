import * as React from "react"

// import { Button } from "@/components/ui/button"
import {
  Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroupDemo } from "./ExamSelect"

export function CardWithForm() {
  return (
    <Card className="w-[350px] h-[450px] border border-black  md:mt-[300px] ">
      <CardHeader className=" border-b border-black p-4">   
        <CardTitle className="m-2"> Filter</CardTitle>
        {/* <CardDescription>De</CardDescription> */}
      </CardHeader>
      <CardHeader className="border-b border-black">
        <CardTitle className="m-2">Exams</CardTitle>
        <RadioGroupDemo/>
        
        {/* <CardDescription>De</CardDescription> */}
      </CardHeader>
      <CardHeader>
        <CardTitle className="mb-4 m-2">Year</CardTitle>
        <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="2025" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">2024</SelectItem>
                  <SelectItem value="sveltekit">2023</SelectItem>
                  <SelectItem value="astro">2022</SelectItem>
                  <SelectItem value="nuxt">2021</SelectItem>
                </SelectContent>
              </Select>
        
        {/* <CardDescription>De</CardDescription> */}
      </CardHeader>
      
      
    </Card>
  )
}
