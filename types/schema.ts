// auto-generated when you run 'npm run supabase:types'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          body: string | null
          id: number
          name: string
        }
        Insert: {
          body?: string | null
          id?: number
          name: string
        }
        Update: {
          body?: string | null
          id?: number
          name?: string
        }
      }
      roles: {
        Row: {
          body: string | null
          id: number
          name: string
        }
        Insert: {
          body?: string | null
          id?: number
          name: string
        }
        Update: {
          body?: string | null
          id?: number
          name?: string
        }
      }
      status: {
        Row: {
          body: string
          id: number
          name: string
        }
        Insert: {
          body: string
          id?: number
          name: string
        }
        Update: {
          body?: string
          id?: number
          name?: string
        }
      }
      users: {
        Row: {
          avatar: string | null
          created_at: string | null
          given_name: string | null
          id: number
          introduction: string | null
          role_id: number | null
          surname: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar?: string | null
          created_at?: string | null
          given_name?: string | null
          id?: number
          introduction?: string | null
          role_id?: number | null
          surname?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar?: string | null
          created_at?: string | null
          given_name?: string | null
          id?: number
          introduction?: string | null
          role_id?: number | null
          surname?: string | null
          updated_at?: string | null
          username?: string | null
        }
      }
    }
  }
}
