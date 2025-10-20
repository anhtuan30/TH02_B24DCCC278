import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Student } from '../types/Student';
import { Link } from 'react-router-dom';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get<Student[]>('https://jsonplaceholder.typicode.com/users');
        setStudents(res.data);
      } catch (err) {
        setError('Không thể lấy dữ liệu sinh viên');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            
            <Link to={`/student/${student.id}`}>
              {student.name} - {student.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
