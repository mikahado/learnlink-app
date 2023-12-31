"""Created tables

Revision ID: 3b2059dc49fd
Revises: 
Create Date: 2023-10-02 12:37:02.772787

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3b2059dc49fd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('students',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('avatar', sa.String(), nullable=True),
    sa.Column('DOB', sa.DateTime(), nullable=True),
    sa.Column('school_name', sa.String(), nullable=True),
    sa.Column('classroom', sa.String(), nullable=True),
    sa.Column('accommodations', sa.String(), nullable=True),
    sa.Column('progress', sa.Integer(), nullable=True),
    sa.Column('bio', sa.String(), nullable=True),
    sa.Column('pin', sa.String(length=5), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('subjects',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('content', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('students_subject',
    sa.Column('student_id', sa.Integer(), nullable=False),
    sa.Column('subject_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['student_id'], ['students.id'], ),
    sa.ForeignKeyConstraint(['subject_id'], ['subjects.id'], ),
    sa.PrimaryKeyConstraint('student_id', 'subject_id')
    )
    op.create_table('teachers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('school_name', sa.String(), nullable=True),
    sa.Column('classroom', sa.String(), nullable=True),
    sa.Column('pin', sa.Integer(), nullable=True),
    sa.Column('voice_id', sa.String(), nullable=True),
    sa.Column('_password_hash', sa.String(), nullable=True),
    sa.Column('students_teacher', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['students_teacher'], ['students.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('teachers_subject',
    sa.Column('teacher_id', sa.Integer(), nullable=False),
    sa.Column('subject_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['subject_id'], ['subjects.id'], ),
    sa.ForeignKeyConstraint(['teacher_id'], ['teachers.id'], ),
    sa.PrimaryKeyConstraint('teacher_id', 'subject_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('teachers_subject')
    op.drop_table('teachers')
    op.drop_table('students_subject')
    op.drop_table('subjects')
    op.drop_table('students')
    op.drop_column('student', 'pin_number')
    # ### end Alembic commands ###
