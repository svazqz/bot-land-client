import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateBotMutation } from '../../generated/graphql';
import './styles.css';
import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '../../components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

interface Props {}

const NewBotFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string(),
  token: z.string().min(1, { message: 'Name is required' }),
});

const CreateBot: React.FC<Props> = () => {
  const [mutateFunction, { data, loading, error }] = useCreateBotMutation();
  const form = useForm<z.infer<typeof NewBotFormSchema>>({
    resolver: zodResolver(NewBotFormSchema),
    defaultValues: {
      name: '',
      description: '',
      token: '',
    },
  });

  function onSubmit(data: z.infer<typeof NewBotFormSchema>) {
    console.log(data);
    // mutateFunction({
    //   variables: {
    //     name: 'Test',
    //     description: 'Description',
    //     token: '98289482409823084',
    //     flow: '{}',
    //   },
    // });
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className="w-64">Create Bot</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-2/3 space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bot Name</FormLabel>
                        <FormControl>
                          <Input placeholder="bot-name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descriptionsername</FormLabel>
                        <FormControl>
                          <Input placeholder="Description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="token"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telegram Bot Token</FormLabel>
                        <FormControl>
                          <Input placeholder="token" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is the token provided by BotFather in Telegram.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateBot;
