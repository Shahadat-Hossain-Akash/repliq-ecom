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

export default function CustomerTable({data, columns}) {
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
                                    {item.email}
                                </TableCell>
                                <TableCell key={item}>
                                    {item.phone}
                                </TableCell>
                                <TableCell key={item}>
                                    {item.address}
                                </TableCell>
                                <TableCell key={item}>
                                  <Link href={`/admin/customers/${item.id}`} className='underline flex'>
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