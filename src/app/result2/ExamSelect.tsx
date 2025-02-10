import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2  p-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">JEE Mains Exam</Label>
      </div>
      <div className="flex items-center space-x-2 m-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">JEE Advanced Exam</Label>
      </div>
      <div className="flex items-center space-x-2 m-2 ">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">KVPY</Label>
      </div>
    </RadioGroup>
  )
}
