import React from 'react';

const Tasks = () => {
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-3xl font bold'>Tasks done</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='text-2xl'>1</th>
                            <td className='text-2xl'>Cy Ganderton</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tasks;