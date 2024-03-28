'use client'
import React, { useState } from 'react'
import { customerColumn, customers } from '@/data/data'
import CustomerTable from './CustomerTable'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button, Input} from "@nextui-org/react"

export default function Customer() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const [newCustomer, setNewCustomer] = useState({id: "", name: "", phone: "", email: "", address: ""})
  const [data, setData] = useState(customers)

  let id;
  const handleInput = (key, value) => {
    setNewCustomer({ ...newCustomer, [key]: value });
  }
  const handleCustomer = () => {
    id = customers.length + 1
    const updatedCustomer = {id, ...newCustomer}
    setData([...data, updatedCustomer])
  }

  return (
    <div className='w-full min-h-full flex flex-col gap-4'>
            <div className='w-full items-center justify-between flex'>
            <span className='text-3xl'>Customer Details</span>
            <Button onPress={onOpen} variant='flat' color='success'>Add customer</Button>
            </div>
    <CustomerTable data={data} columns={customerColumn}/>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Add customer</ModalHeader>
              <ModalBody>
              <Input
              required
              label="Name"
              labelPlacement='outside'
              placeholder='Enter customer name'
              value={newCustomer.name}
              onChange={(e) => handleInput("name", e.target.value)}
            />
            <Input
              required
              label="Phone"
              labelPlacement='outside'
              placeholder='Enter customer phone'
              value={newCustomer.phone}
              onChange={(e) => handleInput("phone", e.target.value)}
            />
            <Input
              required
              label="Email"
              labelPlacement='outside'
              placeholder='Enter customer email'
              value={newCustomer.email}
              onChange={(e) => handleInput("email", e.target.value)}
            />
            <Input
              required
              label="Address"
              labelPlacement='outside'
              placeholder='Enter customer address'
              value={newCustomer.address}
              onChange={(e) => handleInput("address", e.target.value)}
            />
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleCustomer} color="primary" onPress={onClose} className='text-white'>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
</div>
  )
}
