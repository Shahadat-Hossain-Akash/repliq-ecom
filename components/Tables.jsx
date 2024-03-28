'use client'
import React from 'react'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react"
import Link from 'next/link'

export default function Tables({data}) {
    const columns = [
        {
            key: "id",
            label: "ID"
        }, {
            key: "name",
            label: "NAME"
        }, {
            key: "phone",
            label: "PHONE"
        }, {
            key: "date",
            label: "DATE"
        }, {
            key: "bill",
            label: "BILL"
        },
        {
          key: "details",
          label: "DETAILS"
      }
    ];
    return (
        <div>
            <Table shadow='none'>
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody>
                    {
                        data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell key={item}>
                                    {item.id}
                                </TableCell>
                                <TableCell key={item}>
                                    
                                        {item.name}
                                    
                                </TableCell>
                                <TableCell key={item}>
                                    {item.bill}
                                </TableCell>
                                <TableCell key={item}>
                                    {item.phone}
                                </TableCell>
                                <TableCell key={item}>
                                    {item.date}
                                </TableCell>
                                <TableCell key={item}>
                                  <Link href={`/admin/orders/${item.id}`} className='underline flex'>
                                    Details
                                  </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
}
