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

const ShopFilterBar = ({ storeCard, filterCard, optionsFilter }: { storeCard: Array<any>, filterCard: Array<any>, optionsFilter: Array<any> }) => {

  const form = useForm();

  return (
    <div className="relative h-max bg-white rounded-br-lg py-3 px-4 ">
      <Form {...form} >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <>
                {filterCard.map((filter) => (
                  <FormItem key={filter.id} >
                    <FormLabel>{filter.name}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={filter.name} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {
                          optionsFilter.map((option) => (
                            <div key={option.id}>
                              {filter.id === option.cardFiltersId ?
                              <SelectItem value={option.id}>
                                {option.label}
                              </SelectItem> 
                              : "" }
                            </div>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </FormItem>
                ))}
              </>
            )}
          />
        </div>
      </Form>
    </div>
  )
}

export default ShopFilterBar;

