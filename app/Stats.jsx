import React from "react";

const Stats = () => {
  return (
    <section className="bg-white mt-16">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Helping students and staff members find lost items
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Campus Discovery seeks to easen the pain of going through offices
            around the campus just to locate your lost item.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg  px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Items Recovered
              </dt>

              <dd className="text-4xl font-extrabold text-accent md:text-5xl">
                0
              </dd>
            </div>

            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Students helped
              </dt>

              <dd className="text-4xl font-extrabold text-accent md:text-5xl">
                0
              </dd>
            </div>

            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Staff helped
              </dt>

              <dd className="text-4xl font-extrabold text-accent md:text-5xl">
                0
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
