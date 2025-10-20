import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Student } from '../types/Student';
import { useParams, Link } from 'react-router-dom';

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchStudent = async () => {
      try {
        const res = await axios.get<Student>(`https://jsonplaceholder.typicode.com/users/${id}`);
        setStudent(res.data);
      } catch {
        setError('Không thể lấy thông tin sinh viên');
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>{error}</p>;
  if (!student) return <p>Không tìm thấy sinh viên</p>;

  return (
    <div>
      <h2>Chi tiết sinh viên</h2>
      <p><strong>Họ tên:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Địa chỉ:</strong> {student.address.street}, {student.address.suite}, {student.address.city}, {student.address.zipcode}</p>
      <p><strong>Số điện thoại:</strong> {student.phone}</p>
      <p><strong>Website:</strong> {student.website}</p>
      <p><strong>Công ty:</strong> {student.company.name}</p>
      <Link to="/">Quay lại danh sách</Link>
    </div>
  );
};

export default StudentDetail;
