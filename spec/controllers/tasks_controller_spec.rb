require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  describe 'GET #index' do

    context 'ログインしていない状態でアクセスしたとき' do
      before do
        get :index
      end

      it 'ログインページにリダイレクトされること' do
        expect(response).to redirect_to(new_user_session_path)
      end
    end

    context 'ログインユーザーがアクセスしたとき' do
      login_user
      before do
        get :index
      end

      it '@tasksがnilではないこと' do
        expect(assigns(:tasks)).to be_truthy
      end

      it 'ステータスコード200を返すこと' do
        expect(response.status).to eq(200)
      end
    end
  end

  describe 'GET #new' do
    context 'ログインしていない状態でアクセスしたとき' do
      before do
        get :index
      end

      it 'ログインページにリダイレクトされること' do
        expect(response).to redirect_to(new_user_session_path)
      end
    end

    context 'ログインユーザーがアクセスしたとき' do
      login_user

      before do
        get :new
      end

      it '@taskに新規Taskオブジェクトが格納されること' do
        expect(assigns(:task)).to be_a_new(Task)
      end

      it 'ステータスコード200を返すこと' do
        expect(response.status).to eq(200)
      end
    end
  end

  describe 'POST #create' do
    subject {
      Proc.new {
      post :create, params: {task: FactoryGirl.attributes_for(:task)}
      }
    }

    context 'ログインユーザーでない場合' do
      it 'ステータスコード302を返すこと' do
        subject.call
        expect(response.status).to eq(302)
      end

      it 'データベースに新しいTODOが登録できないこと' do
        expect{
          subject.call
        }.to change(Task, :count).by(0)
      end

      it 'ログインページにリダイレクトされること' do
        subject.call
        expect(response).to redirect_to(new_user_session_path)
      end
    end

    context 'ログインユーザーの場合' do
      login_user
      it 'ステータスコード302を返すこと' do
          subject.call
        expect(response.status).to eq(302)
      end

      it 'データベースに新しいTODOが登録されること' do
        expect{ subject.call }.to change(Task, :count).by(1)
      end

      it 'タスクページにリダイレクトされること' do
          subject.call
        expect(response).to redirect_to(task_path(assigns(:task)))
      end
    end
  end
end
