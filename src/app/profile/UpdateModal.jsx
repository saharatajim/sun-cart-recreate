"use client";
import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function UpdateModal() {
        const onSubmit=async(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const image=e.target.image.value
        console.log({name,image})
await authClient.updateUser({
    image,
    name
})
     }
  return (
    <Modal>
      <Button className="w-full btn btn-warning">Update</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              
              <Modal.Heading>Update your profile</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form 
                
                onSubmit={onSubmit} className="flex flex-col gap-4 ">
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Add Image URL" />
                  </TextField>
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}