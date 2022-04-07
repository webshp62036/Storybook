import React from 'react'

function Table() {
  return (
    <div>
      <table className='table-atuo text-center border-collapse border border-slate-400' width="50%">
          <tr>
              <th colSpan="4">Student</th>
          </tr>
          <tr>
              <th className='border border-slate-400'>Name</th>
              <th className='border border-slate-400'>Roll_no</th>
              <th className='border border-slate-400'>Fee</th>
              <th className='border border-slate-400'>Contact_no</th>
          </tr>
          <tr > 
              <td className='border border-slate-400'>Subash Prasad</td>
              <td className='border border-slate-400'>19MC26654</td>
              <td className='border border-slate-400'>50,000</td>
              <td className='border border-slate-400'>+91 XXXXXXXXX</td>
          </tr>
          <tr>
          <td className='border border-slate-400'>Subash Prasad</td>
              <td className='border border-slate-400'>19MC26654</td>
              <td className='border border-slate-400'>50,000</td>
              <td className='border border-slate-400'>+91 XXXXXXXXX</td>
          </tr>
          <tr>
          <td className='border border-slate-400'>Subash Prasad</td>
              <td className='border border-slate-400'>19MC26654</td>
              <td className='border border-slate-400'>50,000</td>
              <td className='border border-slate-400'>+91 XXXXXXXXX</td>
          </tr>
      </table>
    </div>
  )
}

export default Table
