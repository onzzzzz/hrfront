import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

function HistoryTable() {
  return (

  <Table className="mb-[16px]">
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Date</TableHead>
        <TableHead>Description</TableHead>
        <TableHead >Used Days (-)</TableHead>
        <TableHead >Earned Days (+)</TableHead>
        <TableHead >Balance</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell className="font-medium">23/05/2024</TableCell>
        <TableCell>Accrual for 23/05/2024  to 20/11/2024</TableCell>
        <TableCell ></TableCell>
        <TableCell >3.00</TableCell>
        <TableCell >3.00</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="font-medium">23/05/2024</TableCell>
        <TableCell>Accrual for 23/05/2024  to 20/11/2024</TableCell>
        <TableCell >-6</TableCell>
        <TableCell ></TableCell>
        <TableCell >3.00</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="font-medium">23/05/2024</TableCell>
        <TableCell>Accrual for 23/05/2024  to 20/11/2024</TableCell>
        <TableCell ></TableCell>
        <TableCell >3.00</TableCell>
        <TableCell >3.00</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="font-medium">23/05/2024</TableCell>
        <TableCell>Accrual for 23/05/2024  to 20/11/2024</TableCell>
        <TableCell ></TableCell>
        <TableCell >3.00</TableCell>
        <TableCell >3.00</TableCell>
      </TableRow>

      <TableRow>
        <TableCell className="font-medium">23/05/2024</TableCell>
        <TableCell>Accrual for 23/05/2024  to 20/11/2024</TableCell>
        <TableCell >-6</TableCell>
        <TableCell ></TableCell>
        <TableCell >3.00</TableCell>
      </TableRow>


      <TableRow>
        <TableCell className="font-medium">23/05/2024</TableCell>
        <TableCell>Accrual for 23/05/2024  to 20/11/2024</TableCell>
        <TableCell ></TableCell>
        <TableCell >3.00</TableCell>
        <TableCell >3.00</TableCell>
      </TableRow>

      
    </TableBody>
  </Table>
    
  )
}

export default HistoryTable