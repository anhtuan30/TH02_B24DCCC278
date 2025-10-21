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
