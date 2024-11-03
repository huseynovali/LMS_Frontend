import React, { useEffect, useState } from "react";
import { studentPaymentData } from "../../fakedata";
import { FaAngleLeft, FaCheck, FaRegClock } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Navigate, useParams } from "react-router";

function MyPayments() {
  const { role } = useParams();

  if (role !== "student") {
    return <Navigate to={`/${role}`} />;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPayments = studentPaymentData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(studentPaymentData.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-white rounded-lg p-4 overflow-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg">
          <tr className="rounded-lg">
            <th scope="col" className="px-6 py-3">
              Tarix 
            </th>
            <th scope="col" className="px-6 py-3">
              Ödənişi alan 
            </th>
            <th scope="col" className="px-6 py-3">
              Ödəniş 
            </th>
            <th scope="col" className="px-6 py-3">
              Ödəndi 
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPayments.map((payment) => (
            <tr
              key={payment.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {payment.paymentDate}
              </td>
              <td className="px-6 py-4">{payment.receiverName}</td>
              <td className="px-6 py-4">${payment.paymentAmount}</td>
              <td className="px-6 py-4">
                {payment.isPaid ? (
                  <FaCheck className="mx-5 text-green-300" />
                ) : (
                  <FaRegClock className="mx-5" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end items-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          <FaAngleLeft />
        </button>
        <span className="text-gray-700 mx-2">
          {" "}
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default MyPayments;
