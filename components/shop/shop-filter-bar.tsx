"use client"

import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const ShopFilterBar = ({ storeCard }: { storeCard: Array<any> }) => {

  const form = useForm();

  return (
    <div className="relative min-w-[360px] max-w-[360px] min-h-[100vh] bg-white rounded-br-lg py-3 px-4">
      <Form {...form} >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Name" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {storeCard.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>

                </Select>
              </FormItem>
            )}
          />
        </div>
      </Form>
    </div>
  )
}

export default ShopFilterBar;